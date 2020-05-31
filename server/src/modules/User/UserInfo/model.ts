import * as mongoose from 'mongoose';

import { UserInfo } from './interface';

const Schema = mongoose.Schema;
export const UserInfoSchema: mongoose.Schema<UserInfo> = new Schema({
  basic_info: {
    type: mongoose.Schema.Types.ObjectId,
    required: 'Enter the basic info of the user',
  },
});
