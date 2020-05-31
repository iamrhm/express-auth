import { Router } from 'express';
import passport from 'passport';

import PassportMiddleware from 'middlewares/auth/passport';
import SessionMiddleware from 'middlewares/session/handler';

import AuthenticationRoutes from 'modules/Authentication/routes';
import UserRoutes from 'modules/User/routes';
import UserOverviewRoutes from 'modules/Overview/routes';

class AuthRoutes {
  private authenticationRoutes: Router = AuthenticationRoutes;
  private userRoutes: Router = UserRoutes;
  private userOverviewRoutes: Router = UserOverviewRoutes;

  private passportMiddleware = new PassportMiddleware();
  private session = new SessionMiddleware();

  public router: Router = Router();

  constructor() {
    this.passportMiddleware.applyStrategies();
    this.applyRoutes();
  }

  public applyRoutes(): void {
    this.router.use('/', this.authenticationRoutes);
    // section for secure routes should be listed here
    this.router.use(
      this.session.hasValidToken,
      passport.authenticate('jwt', { session: false })
    );

    this.router.use('/overview', this.userOverviewRoutes);
    this.router.use('/user', this.userRoutes);
  }
}

export default new AuthRoutes().router;
