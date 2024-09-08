import axios from "axios";

export const getInitialApi = () => {
  const initialApi = axios.create({
    baseURL: "http://localhost:4000/writeNote/api/v1",
  });

  return initialApi;
};
