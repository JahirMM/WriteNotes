import { useInitialApi } from "../hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const fetchLogout = async () => {
  await initialApi.post(
    "logout",
    {},
    {
      withCredentials: true,
    }
  );
};
