import { Router } from 'express';

import PostController from './controller';
class PostRoutes {
  private postController: PostController = new PostController();

  public router: Router = Router();

  constructor() {
    this.applyRoutes();
  }

  public applyRoutes(): void {
    this.router
      .route('/')
      .get(this.postController.getPosts)
      .post(this.postController.addNewPost);

    this.router
      .route('/:postId')
      .get(this.postController.getPostWithID)
      .delete(this.postController.deletePost);
  }
}

export default new PostRoutes().router;
