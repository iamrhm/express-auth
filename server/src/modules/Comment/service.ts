import * as mongoose from 'mongoose';

import UserService from 'modules/User/service';

import { CommentSchema } from './model';

import { BasicUserInfo, ExtendedCommentInfo, CommentInfo } from './interface';

const Comment: mongoose.model<CommentInfo> = mongoose.model('Comment', CommentSchema);
export default class CommentService {
  private userService: UserService = new UserService();

  public addNewComment(comment: CommentInfo): Promise<CommentInfo> {
    const newComment = new Comment(comment);
    return newComment.save();
  }

  public deleteComment(commentId: string): Promise<CommentInfo> {
    return Comment.remove({ _id: commentId });
  }

  public getComments(): Promise<CommentInfo[]> {
    return Comment.find({});
  }

  public getCommentWithId(commentId: string): Promise<CommentInfo> {
    return Comment.findById(commentId);
  }

  public getExtendedCommentInfo = async (
    commentId: string
  ): Promise<ExtendedCommentInfo> => {
    const commentInfo: mongoose.Model<CommentInfo> = await Comment.findById(commentId);
    const creator: BasicUserInfo =
      commentInfo.creator &&
      (await this.getUserInfosById(commentInfo.creator));

    return {
      ...commentInfo._doc,
      creator,
    };
  };

  public getUserInfosById = async (
    uid: string,
  ): Promise<BasicUserInfo> => {
    let creatorInfo: BasicUserInfo;
    creatorInfo = await  this.userService.getUserById(uid);
    return creatorInfo;
  };
}
