// INTERFACES
import { CreateNoteResponseInterface } from "../interfaces/CreateNoteResponseInterface";
import { NoteInterfaceService } from "@/share/interfaces/NoteInterfaceService";

// HOOK
import { useInitialApi } from "@/share/hooks/useInitialApi";

const { initialApi } = useInitialApi();

export const createNote = async (
  noteData: NoteInterfaceService
): Promise<CreateNoteResponseInterface> => {
  const res = await initialApi.post(`note`, noteData, {
    withCredentials: true,
  });
  return res.data;
};
