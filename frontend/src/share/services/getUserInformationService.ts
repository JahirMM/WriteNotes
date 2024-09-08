// INTERFACE
import { GetUserResponseInterface } from "../interfaces/GetUserResponseInterface";

import { getInitialApi } from "../hooks/useInitialApi";

export const getUserInformation =
  async (): Promise<GetUserResponseInterface> => {
    const initialApi = getInitialApi();
    const res = await initialApi.get("user", {
      withCredentials: true,
    });
    return res.data;
  };
