import { AuthRepositoryInterface } from "../domain/interfaces/authRepository.interface";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export class Login {
  private authRepository: AuthRepositoryInterface;

  constructor(authRepository: AuthRepositoryInterface) {
    this.authRepository = authRepository;
  }

  private createToken(email: string, userId: string) {
    const key = process.env.SECRET_TOKEN_KEY;
    if (!key) {
      throw new Error("No key for creating the token");
    }
    const token = jwt.sign({ email, userId }, key, { expiresIn: "1h" });
    return token;
  }

  async login(email: string, password: string) {
    const user = await this.authRepository.findUserByEmail(email);

    if (!user) {
      return null;
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (user && isValidPassword) {
      const token = this.createToken(email, user.userId!);
      return token;
    }
    return null;
  }
}
