// INTERFACES
import { CreateNoteResponseInterface } from "../interfaces/CreateNoteResponseInterface";
import { NoteInterfaceService } from "@/share/interfaces/NoteInterfaceService";

import { getInitialApi } from "@/share/hooks/useInitialApi";

export const createNote = async (
  noteData: NoteInterfaceService
): Promise<CreateNoteResponseInterface> => {
  const initialApi = getInitialApi();
  const res = await initialApi.post(`note`, noteData, {
    withCredentials: true,
  });
  return res.data;
};
