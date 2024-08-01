import { UserRepositoryInterface } from "../domain/interfaces/userRepository.interface";

export class GetUser {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  async getUser(userId: string) {
    return await this.userRepository.getUserByUserId(userId);
  }
}
