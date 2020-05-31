import { Document } from "mongoose";

import { User } from "modules/User/interface";
import { CommentInfo } from "modules/Comment/interface";

export interface BasicUserInfo extends Omit<User, "creator_info"> {}
export interface CommentDetails extends CommentInfo {}

export interface PostInfo extends Document {
  _id: string;
  title: string;
  created_date: Date;
  creator: string;
  content: string;
  comments: string[];
}

export interface ExtendedPostInfo
  extends Omit<PostInfo, "comments" | "creator"> {
  creator: BasicUserInfo;
  comments: CommentDetails[];
}
