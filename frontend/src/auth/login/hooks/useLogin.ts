// INTERFACES
import { ErrorResponseInterface } from "@/share/interfaces/errorResponseInterface";
import { LoginResponseInterface } from "../interfaces/LoginResponseInterface";
import { LoginInterface } from "../interfaces/loginInterface";

// TANSTACK
import { useMutation } from "@tanstack/react-query";

// SERVICE
import { fetchLogin } from "../services/loginService";

// SONNER
import { toast } from "sonner";

// AXIOS
import { AxiosError } from "axios";

import { useRouter } from "next/navigation";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useLogin() {
  const router = useRouter();

  const mutationLogin = useMutation<
    LoginResponseInterface,
    Error,
    LoginInterface
  >({
    mutationFn: fetchLogin,
    onSuccess: (response) => {
      console.log(response.token);
      toast.success(response.message);
      setTimeout(() => {
        router.push("/web/dashboard");
      }, 1000);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Login failed");
      } else {
        toast.error("An unknown error occurred");
      }
    },
  });

  return { mutationLogin };
}
