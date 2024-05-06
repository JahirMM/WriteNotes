import { AuthRepositoryInterface } from "../domain/interfaces/authRepository.interface";
import { UserAuthInterface } from "../domain/interfaces/userAuth.interfaces.interface";

export class CreateAccount {
  private authRepository: AuthRepositoryInterface;

  constructor(authRepository: AuthRepositoryInterface) {
    this.authRepository = authRepository;
  }

  private validationException(user: UserAuthInterface) {
    if (
      !user.email ||
      !user.password ||
      !user.firstName ||
      !user.middleName ||
      !user.lastName ||
      !user.maternalLastName
    ) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      return false;
    }

    return true;
  }

  async createAccount(user: UserAuthInterface) {
    const isDataValid = this.validationException(user);
    if (!isDataValid) {
      return null;
    }

    return await this.authRepository.createAccount(user);
  }
}
