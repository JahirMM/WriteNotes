import { NoteRepositoryInterface } from "../domain/interfaces/noteRepository.interface";
import { NoteInterface } from "../domain/interfaces/note.interface";

export class CreateNote {
  private noteRepository: NoteRepositoryInterface;

  constructor(noteRepository: NoteRepositoryInterface) {
    this.noteRepository = noteRepository;
  }

  async createNote(
    userId: string,
    title: string,
    description: string,
    favorite: boolean
  ) {
    const note: NoteInterface = {
      userId: userId,
      title: title,
      description: description,
      favorite: favorite,
    };
    return await this.noteRepository.createNoteByUserId(note);
  }
}
