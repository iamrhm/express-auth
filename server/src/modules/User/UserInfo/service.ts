import * as mongoose from 'mongoose';

import { UserInfoSchema } from './model';
import { UserInfo } from './interface';

const User: mongoose.Model<UserInfo> = mongoose.model('User', UserInfoSchema);

export default class UserInfoService {
  public addNewUserInfo(user_info: Omit<UserInfo, '_id'>): Promise<UserInfo> {
    const newUserInfo = new User(user_info);
    return newUserInfo.save();
  }

  public deleteUserInfo(user_id: string): Promise<UserInfo> {
    return User.remove({ _id: user_id });
  }

  public getAllUsers(): Promise<UserInfo[]> {
    return User.find({});
  }

  public getUserInfoById(user_id: string): Promise<UserInfo> {
    return User.findById(user_id);
  }

  public getUserInfoFromBasicId(basic_info: string): Promise<UserInfo> {
    return User.findOne({ basic_info });
  }
}
