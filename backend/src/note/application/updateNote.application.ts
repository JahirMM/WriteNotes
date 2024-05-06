import { NoteInterface } from "../domain/interfaces/note.interface";
import { NoteRepositoryInterface } from "../domain/interfaces/noteRepository.interface";

export class UpdateNote {
  private noteRepository: NoteRepositoryInterface;

  constructor(noteRepository: NoteRepositoryInterface) {
    this.noteRepository = noteRepository;
  }

  async updateNote(note: NoteInterface) {
    return await this.noteRepository.updateNoteByNoteId(note);
  }
}
