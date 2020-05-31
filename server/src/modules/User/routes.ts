import { Router } from 'express';

import UserController from './controller';

class UserRoutes {
  private userController: UserController = new UserController();

  public router: Router = Router();

  constructor() {
    this.applyRoutes();
  }

  public applyRoutes(): void {
    this.router
      .route('/')
      .get(this.userController.getUsers)
      .post(this.userController.addNewUser);

    this.router
      .route('/:userId')
      .get(this.userController.getUserWithID)
      .delete(this.userController.deleteUser);
  }
}

export default new UserRoutes().router;
