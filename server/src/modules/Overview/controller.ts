import { Request, Response } from "express";

import UserOverview from "./service";

import { UserRequest } from "modules/Authentication/interface";
import { User } from "modules/User/interface";

export default class UserOverviewController {
  protected userOverview: UserOverview = new UserOverview();

  public getUserWithID = async (
    req: UserRequest,
    res: Response
  ): Promise<void> => {
    try {
      const user: User = await this.userOverview.getUserOverviewById(
        req.user._id
      );
      res.json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
