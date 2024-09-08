// INTERFACES
import { LoginResponseInterface } from "../interfaces/LoginResponseInterface";
import { LoginInterface } from "../interfaces/loginInterface";

import { getInitialApi } from "@/share/hooks/useInitialApi";

export const fetchLogin = async (
  credentials: LoginInterface
): Promise<LoginResponseInterface> => {
  const initialApi = getInitialApi();
  const res = await initialApi.post("login", credentials, {
    withCredentials: true,
  });
  return res.data;
};
