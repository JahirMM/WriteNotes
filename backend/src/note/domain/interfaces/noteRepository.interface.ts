import { NoteInterface } from "./note.interface";

export interface NoteRepositoryInterface {
  createNoteByUserId(note: NoteInterface): Promise<NoteInterface>;
  getNotesByUserId(
    userId: string,
    favoriteNotes: boolean | undefined
  ): Promise<NoteInterface[]>;
  updateNoteByNoteId(
    note: NoteInterface,
    noteId: string
  ): Promise<NoteInterface | null>;

  getANoteByNoteId(noteId: string): Promise<NoteInterface | "">;
  deleteNoteByNoteId(noteId: string): Promise<any>;
}
