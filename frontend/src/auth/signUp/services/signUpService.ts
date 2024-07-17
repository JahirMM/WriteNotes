// INTERFACES
import { SignUpResponseInterface } from "../interfaces/SignUpResponseInterface";
import { SignUpInterface } from "../interfaces/SignUpInterface";

// HOOKS
import { useInitialApi } from "@/share/hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const fetchSignup = async (
  data: SignUpInterface
): Promise<SignUpResponseInterface> => {
  const res = await initialApi.post("createAccount", data, {
    withCredentials: true,
  });
  return res.data;
};
