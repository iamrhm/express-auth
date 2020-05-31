import * as mongoose from "mongoose";

import UserService from "modules/User/service";
import CommentService from "modules/Comment/service";

import { PostSchema } from "./model";

import {
  BasicUserInfo,
  ExtendedPostInfo,
  PostInfo,
  CommentDetails
} from "./interface";

const Post: mongoose.model<PostInfo> = mongoose.model("Post", PostSchema);
export default class PostService {
  private userService: UserService = new UserService();
  private commentService: CommentService = new CommentService();

  public addNewPost(post: PostInfo): Promise<PostInfo> {
    const newPost = new Post(post);
    return newPost.save();
  }

  public deletePost(postId: string): Promise<PostInfo> {
    return Post.remove({ _id: postId });
  }

  public getPosts(): Promise<PostInfo[]> {
    return Post.find({});
  }

  public getPostWithId(postId: string): Promise<PostInfo> {
    return Post.findById(postId);
  }

  public getExtendedPostInfo = async (
    postId: string
  ): Promise<ExtendedPostInfo> => {
    const postInfo: mongoose.Model<PostInfo> = await Post.findById(postId);
    const creator: BasicUserInfo =
      postInfo.creator && (await this.getUserInfosById(postInfo.creator));
    const comments: CommentDetails[] =
      postInfo.comments &&
      (await this.getCommentDetailsById(postInfo.comments));

    return {
      ...postInfo._doc,
      creator,
      comments
    };
  };

  public getUserInfosById = async (uid: string): Promise<BasicUserInfo> => {
    let creatorInfo: BasicUserInfo;
    creatorInfo = await this.userService.getUserById(uid);
    return creatorInfo;
  };

  public getCommentDetailsById = async (
    uids: string[]
  ): Promise<CommentDetails[]> => {
    let comments: CommentDetails[];
    comments = await Promise.all(
      uids.map(
        (uid: string): Promise<CommentDetails> =>
          this.commentService.getCommentWithId(uid)
      )
    ).then((res: CommentDetails[]): CommentDetails[] => {
      return res;
    });
    return comments;
  };

  public updatePostDetails = async (
    post_id: string,
    comment_id: string,
    operation: "add" | "delete"
  ): Promise<PostInfo> => {
    let postInfo: PostInfo = await this.getPostWithId(post_id);

    operation === "add"
      ? postInfo.comments.push(comment_id)
      : (postInfo.comments = postInfo.comments.filter(
          (comment) => comment !== comment_id
        ));
    return Post.findByIdAndUpdate(post_id, postInfo, { new: true });
  };
}
