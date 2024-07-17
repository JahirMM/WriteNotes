// INTERFACES
import { SignUpResponseInterface } from "../interfaces/SignUpResponseInterface";
import { ErrorResponseInterface } from "@/share/interfaces/errorResponseInterface";
import { SignUpInterface } from "../interfaces/SignUpInterface";

// SERVICE
import { fetchSignup } from "../services/signUpService";

// // TANSTACK
import { useMutation } from "@tanstack/react-query";

// SONNER
import { toast } from "sonner";

// AXIOS
import { AxiosError } from "axios";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useSignUp() {
  const mutationSignUp = useMutation<
    SignUpResponseInterface,
    Error,
    SignUpInterface
  >({
    mutationFn: fetchSignup,
    onSuccess: (response) => {
      toast.success(response.message);
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Login failed");
      } else {
        toast.error("An unknown error occurred");
      }
    },
  });

  return { mutationSignUp };
}
