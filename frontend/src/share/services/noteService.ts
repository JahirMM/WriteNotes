// INTERFACE
import { UpdateNoteResponseInterface } from "../interfaces/UpdateNoteResponseInterface";
import { NotesResponsiveInterfaces } from "../interfaces/NotesResponsiveInterfaces";
import { NoteInterfaceService } from "../interfaces/NoteInterfaceService";

import { getInitialApi } from "../hooks/useInitialApi";

export const fetchNotes = async (
  onlyFavorite: boolean
): Promise<NotesResponsiveInterfaces> => {
  const initialApi = getInitialApi();
  const url = onlyFavorite ? "notes?favorite=true" : "notes";
  const res = await initialApi.get(url, {
    withCredentials: true,
  });
  return res.data;
};

export const updateNote = async (data: {
  noteId: string;
  noteData: NoteInterfaceService;
}): Promise<UpdateNoteResponseInterface> => {
  const { noteId, noteData } = data;
  const initialApi = getInitialApi();

  const res = await initialApi.put(`note/${noteId}`, noteData, {
    withCredentials: true,
  });
  return res.data;
};
