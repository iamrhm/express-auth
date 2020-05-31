import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { JWT_KEY } from 'config/app';
import { Session, SessionInfo } from './model';

import { JwtHeader } from 'modules/Authentication/interface';
import { User } from 'modules/User/interface';

export default class SessionMiddleware {
  public getTokens = async (user: User): Promise<SessionInfo> => {
    const body = {
      _id: user._id,
      email: user.basic_info.email,
    };
    const accessToken = await this.generateAccessToken(body);
    const refreshToken = await jwt.sign(body, JWT_KEY.local.refreshTokenSecret);
    const session = {
      accessToken,
      refreshToken,
    };
    await this.addNewSession(session);

    return session;
  };

  public addNewSession = async (sessionData: SessionInfo): Promise<void> => {
    const session = new Session(sessionData);
    await session.save();
  };

  public isValidToken = async (accessToken: string): Promise<boolean> => {
    const session = await Session.findOne({ accessToken }).exec();
    return Boolean(session);
  };

  public isValidRefreshToken = async (
    refreshToken: string
  ): Promise<boolean> => {
    const session = await Session.findOne({ refreshToken }).exec();
    return Boolean(session);
  };

  public deleteSession = async (accessToken: string): Promise<boolean> => {
    if (!accessToken) {
      throw new Error('Unauthorized');
    }
    const session = await Session.deleteOne({
      accessToken: accessToken.split('Bearer ')[1],
    }).exec();
    return Boolean(session);
  };

  public generateAccessToken = async (user: JwtHeader): Promise<string> => {
    return jwt.sign(user, JWT_KEY.local.accessTokenSecret, {
      expiresIn: '15d',
    });
  };

  public renewToken = async (token: any): Promise<string> => {
    let newToken = '';
    if (!(await this.isValidRefreshToken(token.split('Bearer ')[1]))) {
      throw new Error('Invalid refresh token');
    }

    await jwt.verify(
      token.split('Bearer ')[1],
      JWT_KEY.local.refreshTokenSecret,
      async (err: any, user: any): Promise<void> => {
        if (err) {
          throw new Error('Forbidden');
        }
        const body = {
          _id: user._id,
          email: user.email,
        };
        const accessToken = await this.generateAccessToken(body);
        newToken = accessToken;
      }
    );

    return newToken;
  };

  public hasValidToken = async (
    req: Request,
    res: Response,
    next: () => void
  ): Promise<void> => {
    try {
      const accessToken = req.headers['authorization'];
      if (!accessToken) {
        throw new Error('Unauthorized');
      }

      const isValid = await this.isValidToken(accessToken.split('Bearer ')[1]);

      if (!isValid) {
        throw new Error('Unauthorized');
      }

      next();
    } catch (error) {
      res.status(401).send(error.message);
    }
  };
}
