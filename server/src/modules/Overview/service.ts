import UserService from "modules/User/service";
import { User } from "modules/User/interface";

export default class UserOverviewService extends UserService {
  public getUserOverviewById = async (user_id: string): Promise<any> => {
    const user: User = await this.getUserById(user_id);
    return {
      ...user
    };
  };
}
