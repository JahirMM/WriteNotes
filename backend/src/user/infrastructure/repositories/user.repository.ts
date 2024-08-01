import { UserRepositoryInterface } from "../../domain/interfaces/userRepository.interface";
import { UserInterface } from "../../domain/interfaces/user.interface";
import { User } from "../../domain/user.domain";

export class UserRepository implements UserRepositoryInterface {
  async getUserByUserId(userId: string): Promise<UserInterface[]> {
    return await User.find({ userId: userId });
  }

  async updateUserInformationByUserId(
    user: UserInterface,
    userId: string
  ): Promise<UserInterface | null> {
    const updateUser = await User.findOneAndUpdate(
      { userId },
      { $set: user },
      { new: true }
    );

    return updateUser;
  }
}
