import { Document } from "mongoose";

export interface BasicInfo extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  avatar_url?: string;
  posts?: string[];
  comments?: string[];
}
