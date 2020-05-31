import BasicInfoService from "./BasicInfo/service";
import UserInfoService from "./UserInfo/service";

import { BasicInfo } from "./BasicInfo/interface";
import { UserInfo } from "./UserInfo/interface";
import { User } from "./interface";

export default class UserService extends UserInfoService {
  private basicInfoService: BasicInfoService = new BasicInfoService();

  public addNewUser = async (user: Omit<User, "_id">): Promise<User> => {
    if (!user.basic_info) {
      throw new Error("basic_info detail for the user is missing");
    }

    const basicInfoRecord: BasicInfo = await this.basicInfoService.addNewBasicInfo(
      user.basic_info
    );

    const userInfoRecord: UserInfo = await this.addNewUserInfo({
      basic_info: basicInfoRecord._id
    });

    return {
      _id: userInfoRecord._id,
      basic_info: basicInfoRecord
    };
  };

  public deleteUser = async (user_id: string): Promise<void> => {
    const userInfo: UserInfo = await this.getUserInfoById(user_id);
    await this.basicInfoService.deleteBasicInfo(userInfo.basic_info);

    await this.deleteUserInfo(user_id);
  };

  public getUserFromInfo = async (userInfo: UserInfo): Promise<User> => {
    const basicInfo: BasicInfo = await this.basicInfoService.getBasicInfoWithId(
      userInfo.basic_info
    );
    return {
      _id: userInfo._id,
      basic_info: basicInfo
    };
  };

  public getUsers = async (): Promise<User[]> => {
    let userList: User[];
    const userInfos: UserInfo[] = await this.getAllUsers();
    const userPromises: Promise<User>[] = userInfos.map(
      (userInfo: UserInfo): Promise<User> => this.getUserFromInfo(userInfo)
    );

    await Promise.all(userPromises).then((res: User[]): any => {
      userList = res;
    });

    return userList;
  };

  public getUserById = async (user_id: string): Promise<User> => {
    const userInfo: UserInfo = await this.getUserInfoById(user_id);
    return await this.getUserFromInfo(userInfo);
  };

  public getBasicInfoByEmail = async (email: string): Promise<BasicInfo> => {
    const basicInfo: BasicInfo = await this.basicInfoService.getBasicInfoByEmail(
      email
    );
    return basicInfo;
  };

  public getUserByEmail = async (email: string): Promise<User> => {
    try {
      const basicInfo: BasicInfo = await this.getBasicInfoByEmail(email);
      const userInfo: UserInfo = await this.getUserInfoFromBasicId(
        basicInfo._id
      );

      return {
        _id: userInfo._id,
        basic_info: basicInfo
      };
    } catch (err) {
      throw new Error("User is not registered. Please register first");
    }
  };

  public doesUserIdExist = async (userId: string): Promise<boolean> => {
    const hasUser: boolean =
      userId && Boolean(await this.getUserInfoById(userId));

    return hasUser;
  };

  public updateUserDetails = async (
    user_id: string,
    component: string,
    property: "post" | "comment",
    operation: "add" | "delete"
  ): Promise<User> => {
    const userInfo: UserInfo = await this.getUserInfoById(user_id);
    let basicInfoRecord: BasicInfo = await this.basicInfoService.getBasicInfoWithId(
      userInfo.basic_info
    );
    switch (property) {
      case "post":
        operation === "add"
          ? basicInfoRecord.posts.push(component)
          : (basicInfoRecord.posts = basicInfoRecord.posts.filter(
              (post) => post !== component
            ));
        break;
      case "comment":
        operation === "add" ?
        basicInfoRecord.comments.push(component) : (basicInfoRecord.comments = basicInfoRecord.comments.filter(
              (comment) => comment !== component
            ));
        break;
    }

    await this.basicInfoService.updateBasicInfo(
      userInfo.basic_info,
      basicInfoRecord
    );
    return {
      _id: userInfo._id,
      ...(basicInfoRecord && { basic_info: basicInfoRecord })
    };
  };
}
