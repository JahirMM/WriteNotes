import { NoteInterface } from "../domain/interfaces/note.interface";
import { NoteRepositoryInterface } from "../domain/interfaces/noteRepository.interface";

export class UpdateNote {
  private noteRepository: NoteRepositoryInterface;

  constructor(noteRepository: NoteRepositoryInterface) {
    this.noteRepository = noteRepository;
  }

  private validateFavoriteProperty(note: NoteInterface) {
    if (typeof note.favorite !== "boolean") {
      return false;
    }
    return true;
  }

  async updateNote(note: NoteInterface, noteId: string) {
    const isValid = this.validateFavoriteProperty(note);
    if (isValid) {
      return await this.noteRepository.updateNoteByNoteId(note, noteId);
    }
    return null;
  }
}
