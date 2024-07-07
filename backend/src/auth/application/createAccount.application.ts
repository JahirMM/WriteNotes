import { AuthRepositoryInterface } from "../domain/interfaces/authRepository.interface";
import { UserAuthInterface } from "../domain/interfaces/userAuth.interfaces.interface";
import dotenv from "dotenv";

import * as bcrypt from "bcrypt";

dotenv.config();

export class CreateAccount {
  private authRepository: AuthRepositoryInterface;

  constructor(authRepository: AuthRepositoryInterface) {
    this.authRepository = authRepository;
  }

  private async validationException(user: UserAuthInterface) {
    if (
      !user.email ||
      !user.password ||
      !user.firstName ||
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
    if (user.middleName === undefined) {
      user.middleName = null;
    }

    const isDataValid = await this.validationException(user);
    if (!isDataValid) {
      return null;
    }

    const hashedPassword = bcrypt.hashSync(
      user.password,
      Number(process.env.SALT_ROUNDS)!
    );

    user.password = hashedPassword;

    return await this.authRepository.createAccount(user);
  }
}
