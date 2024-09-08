// INTERFACE
import { UpdateUserResponseInterface } from "../interfaces/UpdateUserResponseInterface";
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

import { getInitialApi } from "@/share/hooks/useInitialApi";

export const updateUser = async (
  data: UserProfileInterface
): Promise<UpdateUserResponseInterface> => {
  const initialApi = getInitialApi();
  const res = await initialApi.put("userInformation", data, {
    withCredentials: true,
  });
  return res.data;
};
