import * as mongoose from "mongoose";

import { BasicInfoSchema } from "./model";
import { BasicInfo } from "./interface";

const BasicInfo: mongoose.model<BasicInfo> = mongoose.model(
  "BasicInfo",
  BasicInfoSchema
);

export default class BasicInfoService {
  public getBasicInfoByEmail(email: string): Promise<BasicInfo> {
    return BasicInfo.findOne({ email }).select("+password");
  }

  public addNewBasicInfo = async (
    basicInfo: Omit<BasicInfo, "_id">
  ): Promise<BasicInfo> => {
    const basicInfoRecord: Omit<BasicInfo, "_id"> = {
      ...basicInfo
    };
    const userExists = await this.getBasicInfoByEmail(basicInfoRecord.email);

    if (userExists) {
      throw new Error("User email is already registered, please login");
    }

    const newBasicInfo = new BasicInfo(basicInfoRecord);
    return await newBasicInfo.save();
  };

  public deleteBasicInfo(basicInfoId: string): Promise<BasicInfo> {
    return BasicInfo.remove({ _id: basicInfoId });
  }

  public getBasicInfos(): Promise<BasicInfo[]> {
    return BasicInfo.find({});
  }

  public getBasicInfoWithId(basicInfoId: string): Promise<BasicInfo> {
    return BasicInfo.findById(basicInfoId);
  }

  public updateBasicInfo = async (
    basicInfoId: string,
    basicInfo: BasicInfo
  ): Promise<BasicInfo> => {
    return BasicInfo.findByIdAndUpdate(basicInfoId, basicInfo, { new: true });
  };
}
