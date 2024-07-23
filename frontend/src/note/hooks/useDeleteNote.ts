// INTERFACE
import { ErrorResponseInterface } from "@/share/interfaces/errorResponseInterface";

// TANSTACK
import { useMutation, useQueryClient } from "@tanstack/react-query";

// SERVICE
import { deleteeNote } from "../service/deleteNoteService";

// SONNER
import { toast } from "sonner";

import { AxiosError } from "axios";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useDeleteNote() {
  const queryClient = useQueryClient();

  const deleteNoteMutation = useMutation<
    { message: string },
    Error,
    { noteId: string }
  >({
    mutationFn: ({ noteId }) => deleteeNote(noteId),
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ["noteList"] });
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Error updating the note");
      } else {
        toast.error("An unknown error occurred");
      }
    },
  });

  return { deleteNoteMutation };
}
