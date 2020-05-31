import { Request, Response } from "express";

import UserService from "./service";
import { BasicInfoSerializer } from "./validator";

import { User } from "./interface";

export default class UserController {
  private userService: UserService = new UserService();

  public addNewUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const basicInfo =
        req.body.basic_info &&
        (await BasicInfoSerializer.validateAsync(req.body.basic_info));
      const user = {
        basic_info: basicInfo
      };
      const newUser: User = await this.userService.addNewUser(user);
      res.json(newUser);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  public deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.userService.deleteUser(req.params.userId);
      res.json({ message: "Delete successful" });
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users: User[] = await this.userService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).send(error);
    }
  };

  public getUserWithID = async (req: Request, res: Response): Promise<void> => {
    try {
      const user: User = await this.userService.getUserById(req.params.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  };
}
