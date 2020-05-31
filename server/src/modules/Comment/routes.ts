import { Router } from 'express';

import CommentController from './controller';
class CommentRoutes {
  private commentController: CommentController = new CommentController();

  public router: Router = Router();

  constructor() {
    this.applyRoutes();
  }

  public applyRoutes(): void {
    this.router
      .route('/')
      .get(this.commentController.getComments)
      .post(this.commentController.addNewComment);

    this.router
      .route('/:commentId')
      .get(this.commentController.getCommentWithID)
      .delete(this.commentController.deleteComment);
  }
}

export default new CommentRoutes().router;
