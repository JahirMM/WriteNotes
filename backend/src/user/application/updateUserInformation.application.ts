import { UserInterface } from "../domain/interfaces/user.interface";
import { UserRepositoryInterface } from "../domain/interfaces/userRepository.interface";

export class UpdateUserInformation {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  async updateUserInformation(user: UserInterface, userId: string) {
    return await this.userRepository.updateUserInformationByUserId(
      user,
      userId
    );
  }
}
