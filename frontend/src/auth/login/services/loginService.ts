// INTERFACES
import { LoginResponseInterface } from "../interfaces/LoginResponseInterface";
import { LoginInterface } from "../interfaces/loginInterface";

import { useInitialApi } from "@/share/hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const fetchLogin = async (
  credentials: LoginInterface
): Promise<LoginResponseInterface> => {
  const res = await initialApi.post("login", credentials, {
    withCredentials: true,
  });
  return res.data;
};
