// INTERFACES
import { SignUpResponseInterface } from "../interfaces/SignUpResponseInterface";
import { SignUpInterface } from "../interfaces/SignUpInterface";

import { getInitialApi } from "@/share/hooks/useInitialApi";

export const fetchSignup = async (
  data: SignUpInterface
): Promise<SignUpResponseInterface> => {
  const initialApi = getInitialApi();
  const res = await initialApi.post("createAccount", data, {
    withCredentials: true,
  });
  return res.data;
};
