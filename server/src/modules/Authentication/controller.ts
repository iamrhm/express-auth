import { Request, Response } from 'express';
import passport from 'passport';


import SessionHandler from 'middlewares/session/handler';
import AuthenticationService from './service';
import { LoginSerializer, RegistrationSerializer } from './validator';

import { User } from 'modules/User/interface';

interface PassportRequest extends Request {
  login: any;
}

export default class AuthenticationController {
  private authService: AuthenticationService = new AuthenticationService();
  private session: SessionHandler = new SessionHandler();

  public performLogin = async (
    req: PassportRequest,
    res: Response,
    next: any
  ): Promise<void> => {
    try {
      await LoginSerializer.validateAsync({
        email: req.body.email,
        password: req.body.password,
      });
      passport.authenticate(
        'login',
        async (err: any, user?: any, info?: string): Promise<void> => {
          try {
            if (err || !user) {
              const error = err || new Error(err.message || info);
              res.status(401).send({ error: error.message });
              return;
            }
            const tokens = await this.session.getTokens(user);

            req.login(
              tokens,
              { session: false },
              async (error: Error): Promise<Response<any>> => {
                if (error) {
                  res.status(500).send({ error });
                }

                return res.status(200).send({
                  auth: true,
                  ...tokens,
                  message: 'User found and logged in successfully',
                });
              }
            );
          } catch (error) {
            res.status(500).send(error);
          }
        }
      )(req, res, next);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public registerUser = async (
    req: PassportRequest,
    res: Response,
    next: any
  ): Promise<void> => {
    try {
      await RegistrationSerializer.validateAsync(req.body);
      passport.authenticate(
        'register',
        async (err: any): Promise<void> => {
          try {
            if (err) {
              const error = err || new Error(err.message);
              res.status(401).send({ error: error.message });
              return;
            }

            const user: User = await this.authService.registerUser(req.body);
            const tokens = await this.session.getTokens(user);

            req.login(
              tokens,
              { session: false },
              async (error: Error): Promise<Response<any>> => {
                if (error) {
                  res.status(500).send({ error });
                }

                return res.status(200).send({
                  auth: true,
                  ...tokens,
                  message: 'User registered and logged in successfully',
                });
              }
            );
          } catch (error) {
            res.status(500).send({ error });
          }
        }
      )(req, res, next);
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  public getUpdatedToken = async (
    req: PassportRequest,
    res: Response
  ): Promise<void> => {
    try {
      const refreshToken = req.headers['authorization'];
      if (!refreshToken) {
        throw new Error('Please send refresh token');
      }

      const accessToken = await this.session.renewToken(refreshToken);

      res.status(200).send({
        auth: true,
        accessToken,
      });
    } catch (error) {
      res.status(401).send(error.message);
    }
  };

  public logoutUser = async (
    req: PassportRequest,
    res: Response
  ): Promise<void> => {
    try {
      const token = req.headers['authorization'];

      if (!token) {
        throw new Error('Unauthorized');
      }

      const deleteSuccessful = await this.session.deleteSession(token);

      if (!deleteSuccessful) {
        const error = new Error('Logout unsuccessful');
        res.status(500).send(error.message);
      }

      res.send('Logout successful');
    } catch (error) {
      res.status(401).send(error.message);
    }
  };
}
