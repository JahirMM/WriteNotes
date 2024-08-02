// INTERFACE
import { ErrorResponseInterface } from "../interfaces/errorResponseInterface";

// SERVICE
import { getUserInformation } from "../services/getUserInformationService";

// TANSTACK
import { useQuery } from "@tanstack/react-query";

// AXIOS
import { AxiosError } from "axios";

export function useGetUser() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["userInformation"],
    queryFn: getUserInformation,
  });

  let errorMessage: string | null = null;

  if (isError) {
    if (error instanceof AxiosError) {
      errorMessage =
        (error.response?.data as ErrorResponseInterface)?.message ||
        "An unknown error occurred";
    } else {
      errorMessage = "An unknown error occurred";
    }
  }

  return { isLoading, isError, data, errorMessage };
}
