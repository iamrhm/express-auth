import * as bcrypt from 'bcrypt';

import { appConfig } from 'config/app';

import UserService from 'modules/User/service';

import { User } from 'modules/User/interface';
import { BasicInfo } from 'modules/User/BasicInfo/interface';
import { LoginInfo, ValidationInfo } from './interface';

class AuthenticationServices extends UserService {
  public isEmailRegistered = async (email: string): Promise<boolean> => {
    const emailExists: boolean =
      email && Boolean(await this.getBasicInfoByEmail(email));
    return emailExists;
  };

  public validateUser = async (
    loginData: LoginInfo
  ): Promise<ValidationInfo> => {
    const validator: ValidationInfo = {
      isValid: false,
      user: undefined,
      message: '',
    };
    const user: User = await this.getUserByEmail(loginData.email);

    if (!user._id) {
      return {
        ...validator,
        message: 'User email is not registered',
      };
    }
    const isValidPassword = await bcrypt.compare(
      loginData.password,
      user.basic_info.password
    );

    return {
      isValid: isValidPassword,
      user,
      message: isValidPassword
        ? 'Logged in Successfully'
        : 'Email and password combination does not match',
    };
  };

  public registerUser = async (registerData: BasicInfo): Promise<User> => {
    const hash = await bcrypt.hash(
      registerData.password,
      appConfig.bcrypt.saltRounds
    );
    const newUserInfo: Omit<User, '_id'> = {
      basic_info: {
        ...registerData,
        password: hash,
      },
    };
    const user: User = await this.addNewUser(newUserInfo);
    return user;
  };
}

export default AuthenticationServices;
