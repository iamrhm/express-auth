import { Router } from 'express';

import UserOverviewController from './controller';
class UserOverviewRoutes {
  private userOverviewController: UserOverviewController = new UserOverviewController();

  public router: Router = Router();

  constructor() {
    this.applyRoutes();
  }

  public applyRoutes(): void {
    this.router
      .route('/')
      .get(this.userOverviewController.getUserWithID)
  }
}

export default new UserOverviewRoutes().router;
