import { NoteRepositoryInterface } from "../domain/interfaces/noteRepository.interface";

export class GetNotes {
  private noteRepository: NoteRepositoryInterface;

  constructor(noteRepository: NoteRepositoryInterface) {
    this.noteRepository = noteRepository;
  }

  async getNotes(userId: string) {
    return await this.noteRepository.getNotesByUserId(userId);
  }
}
