import { getInitialApi } from "../hooks/useInitialApi";

export const fetchLogout = async () => {
  const initialApi = getInitialApi();
  await initialApi.post(
    "logout",
    {},
    {
      withCredentials: true,
    }
  );
};
