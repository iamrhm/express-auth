import { Request, Response, Router } from 'express';

import AuthRoutes from './authRoutes';

export default class Routes {
  public router: Router = Router();
  public authRoutes: Router = AuthRoutes;

  public routes(app: any): void {
    app.route('/').get((req: Request, res: Response): void => {
      res.status(200).send({
        message: 'GET request successfulll!!!!',
      });
    });

    app.use('/api/auth', this.authRoutes);
  }
}
