import { UserInterface } from "./user.interface";

export interface UserRepositoryInterface {
  getUserByUserId(userId: string): Promise<UserInterface[]>;
  updateUserInformationByUserId(
    user: UserInterface,
    userId: string
  ): Promise<UserInterface | null>;
}
