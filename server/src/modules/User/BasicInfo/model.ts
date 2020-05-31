/* tslint:disable */
import * as mongoose from "mongoose";
import { BasicInfo } from "./interface";

const Schema = mongoose.Schema;

export const BasicInfoSchema: BasicInfo = new Schema({
  name: {
    type: String,
    required: "Enter your name"
  },
  email: {
    type: String,
    required: "Enter the email id of the user",
    unique: true
  },
  password: {
    type: String,
    required: "Enter your password",
    select: false
  },
  avatar: {
    type: String
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});
