// INTERFACE
import { GetUserResponseInterface } from "../interfaces/GetUserResponseInterface";

import { useInitialApi } from "../hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const getUserInformation =
  async (): Promise<GetUserResponseInterface> => {
    const res = await initialApi.get("user", {
      withCredentials: true,
    });
    return res.data;
  };
