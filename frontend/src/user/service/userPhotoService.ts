// INTERFACE
import { UpdateUserPhotoResponseInterface } from "../interfaces/UpdateUserPhotoResponseInterface";

import { useInitialApi } from "@/share/hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const updateUserPhoto = async (
  data: FormData
): Promise<UpdateUserPhotoResponseInterface> => {
  const res = await initialApi.put("userPhoto", data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
