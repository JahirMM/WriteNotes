// INTERFACE
import { UpdateUserPhotoResponseInterface } from "../interfaces/UpdateUserPhotoResponseInterface";

import { getInitialApi } from "@/share/hooks/useInitialApi";

export const updateUserPhoto = async (
  data: FormData
): Promise<UpdateUserPhotoResponseInterface> => {
  const initialApi = getInitialApi();
  const res = await initialApi.put("userPhoto", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
