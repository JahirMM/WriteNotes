import { UserAuthInterface } from "./userAuth.interfaces.interface";

export interface AuthRepositoryInterface {
  findUserByEmail(email: string): Promise<UserAuthInterface | null>;
  createAccount(user: UserAuthInterface): Promise<UserAuthInterface | null>;
}
