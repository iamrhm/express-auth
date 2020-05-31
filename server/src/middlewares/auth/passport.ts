import passport from 'passport';
import * as PassportJwt from 'passport-jwt';
import * as PassportLocal from 'passport-local';

import AuthenticationService from 'modules/Authentication/service';
import { JWT_KEY } from 'config/app';

import { JwtHeader, ValidationInfo } from 'modules/Authentication/interface';

class PassportMiddleWare {
  private authenticationService: AuthenticationService = new AuthenticationService();
  private extractJWT: PassportJwt.ExtractJwt = PassportJwt.ExtractJwt;
  private passportJWTStrategy: PassportJwt.Strategy = PassportJwt.Strategy;
  private localStrategy: PassportLocal.Strategy = PassportLocal.Strategy;
  private opts = {
    jwtFromRequest: this.extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_KEY.local.accessTokenSecret,
  };

  private passport: passport = passport;

  private loginStrategy = async (
    email: string,
    password: string,
    done: (err: any, data?: any, info?: any) => void
  ): Promise<void> => {
    try {
      const validator: ValidationInfo = await this.authenticationService.validateUser(
        {
          email,
          password,
        }
      );

      if (!validator.isValid) {
        const error = new Error(validator.message);
        done(error);
      }

      return done(null, validator.user, validator.message);
    } catch (err) {
      done(err);
    }
  };

  private registerStrategy = async (
    email: string,
    password: string,
    done: (err: any, data?: any, info?: any) => void
  ): Promise<void> => {
    try {
      const isEmailRegistered: boolean = await this.authenticationService.isEmailRegistered(
        email
      );
      if (isEmailRegistered) {
        const err = new Error('Email is already registered');
        done(err);
        return;
      }
      done(null);
    } catch (err) {
      done(err);
    }
  };

  private jwtStrategy = async (
    jwtPayload: JwtHeader,
    done: (err: any, data?: any, info?: any) => void
  ): Promise<void> => {
    try {
      const hasUser = await this.authenticationService.doesUserIdExist(
        jwtPayload._id
      );
      if (!hasUser) {
        const error = new Error('Session is invalid, please login');
        done(error);
      }
      done(null, { ...jwtPayload });
    } catch (err) {
      done(err);
    }
  };

  public applyStrategies(): void {
    this.passport.use(
      'login',
      new this.localStrategy(
        {
          usernameField: 'email',
          passwordField: 'password',
          session: false,
        },
        this.loginStrategy
      )
    );

    this.passport.use(
      'register',
      new this.localStrategy(
        {
          usernameField: 'email',
          passwordField: 'password',
          session: false,
        },
        this.registerStrategy
      )
    );

    this.passport.use(
      'jwt',
      new this.passportJWTStrategy(this.opts, this.jwtStrategy)
    );
  }
}

export default PassportMiddleWare;
