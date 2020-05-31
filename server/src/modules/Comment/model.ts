import * as mongoose from "mongoose";
import { CommentInfo } from "./interface";

const Schema = mongoose.Schema;

export const CommentSchema: mongoose.Schema<CommentInfo> = new Schema({
  title: {
    type: String,
    required: "Enter a title for comment"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId
  },
  content: {
    type: String
  }
});
