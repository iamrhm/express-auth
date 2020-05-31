import { Document } from 'mongoose';

export interface UserInfo extends Document {
  _id: string;
  basic_info: string;
}
