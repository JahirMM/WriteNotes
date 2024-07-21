// INTERFACE
import { UpdateNoteResponseInterface } from "../interfaces/UpdateNoteResponseInterface";
import { ErrorResponseInterface } from "../interfaces/errorResponseInterface";
import { NoteInterfaceService } from "../interfaces/NoteInterfaceService";

// TANSTACK
import { useMutation, useQueryClient } from "@tanstack/react-query";

// SERVICE
import { updateNote } from "../services/noteService";

// SONNER
import { toast } from "sonner";

import { AxiosError } from "axios";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useUpdateNote() {
  const queryClient = useQueryClient();

  const updateNoteMutation = useMutation<
    UpdateNoteResponseInterface,
    Error,
    { noteId: string; noteData: NoteInterfaceService }
  >({
    mutationFn: updateNote,
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

  return { updateNoteMutation };
}
