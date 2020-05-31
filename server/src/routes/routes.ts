import { Request, Response, Router } from 'express';

import AuthRoutes from './authRoutes';
import PostRoutes from 'modules/Post/routes';
import CommentRoutes from 'modules/Comment/routes';

export default class Routes {
  public router: Router = Router();
  public authRoutes: Router = AuthRoutes;
  public postRoutes: Router = PostRoutes;
  public commentRoutes: Router = CommentRoutes;

  public routes(app: any): void {
    app.route('/').get((req: Request, res: Response): void => {
      res.status(200).send({
        message: 'GET request successfulll!!!!',
      });
    });

    app.use('/api/auth', this.authRoutes);
    app.use('/api/post', this.postRoutes);
    app.use('/api/comment', this.commentRoutes);
  }
}
