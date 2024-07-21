// INTERFACE
import { ErrorResponseInterface } from "../interfaces/errorResponseInterface";

// SERVICE
import { fetchLogout } from "../services/logoutService";

// TANSTACK
import { useMutation } from "@tanstack/react-query";

// SONNER
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useLogout() {
  const router = useRouter();
  const mutationLogout = useMutation({
    mutationFn: fetchLogout,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Login failed");
      } else {
        toast.error("An unknown error occurred");
      }
      setTimeout(() => {
        router.push("/");
      }, 4000);
    },
  });
  return { mutationLogout };
}
