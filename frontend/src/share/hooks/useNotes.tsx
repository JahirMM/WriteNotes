// INTERFACES
import { ErrorResponseInterface } from "../interfaces/errorResponseInterface";

// SERVICE
import { fetchNotes } from "../services/noteService";

// TANSTACK
import { useQuery } from "@tanstack/react-query";

// AXIOS
import { AxiosError } from "axios";

export function useNotes(onlyFavorite: boolean) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["noteList", onlyFavorite],
    queryFn: () => fetchNotes(onlyFavorite),
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
