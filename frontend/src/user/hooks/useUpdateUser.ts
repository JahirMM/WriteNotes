// INTERFACE
import { UpdateUserResponseInterface } from "../interfaces/UpdateUserResponseInterface";
import { ErrorResponseInterface } from "@/share/interfaces/errorResponseInterface";
import { UserProfileInterface } from "../interfaces/UserProfileInterface";

// TANSTACK
import { useMutation, useQueryClient } from "@tanstack/react-query";

// SERVICE
import { updateUser } from "../service/userService";

// SONNER
import { toast } from "sonner";

import { AxiosError } from "axios";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const updateUserMutation = useMutation<
    UpdateUserResponseInterface,
    Error,
    UserProfileInterface
  >({
    mutationFn: updateUser,
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ["userInformation"] });
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Error updating the user");
      } else {
        toast.error("An unknown error occurred");
      }
    },
  });

  return { updateUserMutation };
}
