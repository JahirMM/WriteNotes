import { NoteInterface } from "./note.interface";

export interface NoteRepositoryInterface {
  getFavoriteNotesByUserId(userId: string): Promise<NoteInterface[]>;
  createNoteByUserId(note: NoteInterface): Promise<NoteInterface>;
  getNotesByUserId(userId: string): Promise<NoteInterface[]>;
  updateNoteByNoteId(note: NoteInterface): Promise<NoteInterface | null>;

  getANoteByNoteId(noteId: string): Promise<NoteInterface | "">;
  deleteNoteByNoteId(noteId: string): Promise<any>;
}
