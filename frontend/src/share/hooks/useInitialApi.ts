import axios from "axios";

export function useInitialApi() {
  const initialApi = axios.create({
    baseURL: "http://localhost:4000/writeNote/api/v1",
  });

  return { initialApi };
}
