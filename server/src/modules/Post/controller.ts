import { Request, Response } from "express";

import PostService from "./service";
import UserService from "modules/User/service";

import { PostSerializer } from "./validator";

import { ExtendedPostInfo, PostInfo } from "./interface";

export default class PostController {
  private postService: PostService = new PostService();
  private userService: UserService = new UserService();

  public addNewPost = async (req: Request, res: Response): Promise<void> => {
    try {
      const post: PostInfo = await PostSerializer.validateAsync(req.body);
      const newPost: PostInfo = await this.postService.addNewPost(post);
      await this.userService.updateUserDetails(
        newPost.creator,
        newPost._id,
        "post",
        "add"
      );
      res.json(newPost);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public deletePost = async (req: Request, res: Response): Promise<void> => {
    try {
      const post: ExtendedPostInfo = await this.postService.getExtendedPostInfo(
        req.params.postId
      );
      await this.postService.deletePost(req.params.postId);
      await this.userService.updateUserDetails(
        post.creator._id,
        post._id,
        "comment",
        "delete"
      );
      res.json({ message: "Delete successful" });
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
      const posts: PostInfo[] = await this.postService.getPosts();
      res.json(posts);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getPostWithID = async (req: Request, res: Response): Promise<void> => {
    try {
      const post: ExtendedPostInfo = await this.postService.getExtendedPostInfo(
        req.params.postId
      );
      res.json(post);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
