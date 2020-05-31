import { Router } from 'express';

import AuthenticationController from './controller';

class AuthenticationRoutes {
  private authenticationController: AuthenticationController = new AuthenticationController();

  public router: Router = Router();

  constructor() {
    this.applyRoutes();
  }

  public applyRoutes(): void {
    this.router
      .route('/register')
      .post(this.authenticationController.registerUser);

    this.router
      .route('/login')
      .post(this.authenticationController.performLogin);

    this.router
      .route('/logout')
      .delete(this.authenticationController.logoutUser);

    this.router
      .route('/token')
      .put(this.authenticationController.getUpdatedToken);
  }
}

export default new AuthenticationRoutes().router;
