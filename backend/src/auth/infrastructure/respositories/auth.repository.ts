import { AuthRepositoryInterface } from "../../domain/interfaces/authRepository.interface";
import { UserAuthInterface } from "../../domain/interfaces/userAuth.interfaces.interface";
import { AuthUser } from "../../domain/userAuth.domain";
import dotenv from "dotenv";

dotenv.config();

export class AuthRepository implements AuthRepositoryInterface {
  async findUserByEmail(email: string): Promise<UserAuthInterface | null> {
    return await AuthUser.findOne({ email });
  }

  async createAccount(
    user: UserAuthInterface
  ): Promise<UserAuthInterface | null> {
    const newUser = new AuthUser(user);
    return await newUser.save();
  }
}
