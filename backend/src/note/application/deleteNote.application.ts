import { NoteRepositoryInterface } from "../domain/interfaces/noteRepository.interface";

export class DeleteNote {
  private noteRespository: NoteRepositoryInterface;

  constructor(noteRespository: NoteRepositoryInterface) {
    this.noteRespository = noteRespository;
  }

  async deleteNote(noteId: string) {
    return await this.noteRespository.deleteNoteByNoteId(noteId);
  }
}
