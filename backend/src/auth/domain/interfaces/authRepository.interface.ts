import { UserAuthInterface } from "./userAuth.interfaces.interface";

export interface AuthRepositoryInterface {
  findUserByEmail(email: string): Promise<UserAuthInterface | null>;
  findPassword(password: string): Promise<boolean>;
  createAccount(user: UserAuthInterface): Promise<UserAuthInterface | null>;
}
