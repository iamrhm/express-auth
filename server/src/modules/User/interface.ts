import { BasicInfo } from './BasicInfo/interface';
import { UserInfo } from './UserInfo/interface';

export interface User {
  _id: UserInfo['_id'];
  basic_info: BasicInfo;
}
