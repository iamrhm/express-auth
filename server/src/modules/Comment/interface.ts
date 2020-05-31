import { Document } from "mongoose";

import { User } from "modules/User/interface";
import { PostInfo } from "modules/Post/interface";

export interface BasicUserInfo extends Omit<User, "creator_info"> {}
export interface PostDetail extends Omit<PostInfo, "comments"> {}

export interface CommentInfo extends Document {
  _id: string;
  created_date: Date;
  post: string;
  creator: string;
  content: string;
}

export interface ExtendedCommentInfo extends Omit<CommentInfo, "creator"> {
  creator: BasicUserInfo;
}
