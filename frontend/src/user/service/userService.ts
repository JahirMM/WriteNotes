// INTERFACE
import { UpdateUserResponseInterface } from "../interfaces/UpdateUserResponseInterface";
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

// HOOK
import { useInitialApi } from "@/share/hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const updateUser = async (
  data: UserProfileInterface
): Promise<UpdateUserResponseInterface> => {
  const res = await initialApi.put("userInformation", data, {
    withCredentials: true,
  });
  return res.data;
};
