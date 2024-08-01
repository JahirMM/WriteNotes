import { NoteRepositoryInterface } from "../domain/interfaces/noteRepository.interface";

export class GetANote {
  private noteRepository: NoteRepositoryInterface;

  constructor(noteRepository: NoteRepositoryInterface) {
    this.noteRepository = noteRepository;
  }

  async getAnote(noteId: string) {
    return await this.noteRepository.getANoteByNoteId(noteId);
  }
}
