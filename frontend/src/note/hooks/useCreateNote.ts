// INTERFACE
import { CreateNoteResponseInterface } from "../interfaces/CreateNoteResponseInterface";
import { ErrorResponseInterface } from "@/share/interfaces/errorResponseInterface";
import { NoteInterfaceService } from "@/share/interfaces/NoteInterfaceService";

// TANSTACK
import { useMutation, useQueryClient } from "@tanstack/react-query";

// SERVICE

// SONNER
import { toast } from "sonner";

import { AxiosError } from "axios";
import { createNote } from "../service/createNoteService";

function isAxiosError(error: any): error is AxiosError<ErrorResponseInterface> {
  return error.isAxiosError === true;
}

export function useCreateNote() {
  const queryClient = useQueryClient();

  const createNoteMutation = useMutation<
    CreateNoteResponseInterface,
    Error,
    NoteInterfaceService
  >({
    mutationFn: createNote,
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ["noteList"] });
      return response;
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Error creating the note");
      } else {
        toast.error("An unknown error occurred");
      }
    },
  });

  return { createNoteMutation };
}
