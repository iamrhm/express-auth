import { Request, Response } from "express";

import CommentService from "./service";
import UserService from "modules/User/service";
import PostService from "modules/Post/service";

import { CommentSerializer } from "./validator";

import { ExtendedCommentInfo, CommentInfo } from "./interface";

export default class CommentController {
  private commentService: CommentService = new CommentService();
  private userService: UserService = new UserService();
  private postService: PostService = new PostService();

  public addNewComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const comment: CommentInfo = await CommentSerializer.validateAsync(
        req.body
      );
      const newComment: CommentInfo = await this.commentService.addNewComment(
        comment
      );
      await this.userService.updateUserDetails(
        newComment.creator,
        newComment._id,
        "comment",
        "add"
      );
      await this.postService.updatePostDetails(
        newComment.post,
        newComment._id,
        "add"
      );
      res.json(newComment);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public deleteComment = async (req: Request, res: Response): Promise<void> => {
    try {
      const comment: ExtendedCommentInfo = await this.commentService.getExtendedCommentInfo(
        req.params.commentId
      );
      await this.commentService.deleteComment(req.params.commentId);
      await this.userService.updateUserDetails(
        comment.creator._id,
        comment._id,
        "comment",
        "delete"
      );
      await this.postService.updatePostDetails(
        comment.post,
        comment._id,
        "delete"
      );
      res.json({ message: "Delete successful" });
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getComments = async (req: Request, res: Response): Promise<void> => {
    try {
      const comments: CommentInfo[] = await this.commentService.getComments();
      res.json(comments);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getCommentWithID = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const comment: ExtendedCommentInfo = await this.commentService.getExtendedCommentInfo(
        req.params.commentId
      );
      res.json(comment);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
