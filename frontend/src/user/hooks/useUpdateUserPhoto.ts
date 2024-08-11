// TANSTACK
import { useMutation, useQueryClient } from "@tanstack/react-query";

// INTERFACES
import { UpdateUserPhotoResponseInterface } from "../interfaces/UpdateUserPhotoResponseInterface";
import { ErrorResponseInterface } from "@/share/interfaces/errorResponseInterface";

// SERVICE
import { updateUserPhoto } from "../service/userPhotoService";

// SONNER
import { toast } from "sonner";

import { AxiosError } from "axios";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useUpdateUserPhoto() {
  const queryClient = useQueryClient();

  const updateUserPhotoMutation = useMutation<
    UpdateUserPhotoResponseInterface,
    Error,
    FormData
  >({
    mutationFn: updateUserPhoto,
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

  return { updateUserPhotoMutation };
}
