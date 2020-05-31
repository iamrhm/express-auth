import * as mongoose from "mongoose";
import { PostInfo } from "./interface";

const Schema = mongoose.Schema;

export const PostSchema: mongoose.Schema<PostInfo> = new Schema({
  title: {
    type: String,
    required: "Enter a title for post"
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
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});
