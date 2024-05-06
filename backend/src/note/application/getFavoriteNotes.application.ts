import { NoteRepositoryInterface } from "../domain/interfaces/noteRepository.interface";

export class GetFavoriteNotes {
  private noteRepository: NoteRepositoryInterface;

  constructor(noteRepository: NoteRepositoryInterface) {
    this.noteRepository = noteRepository;
  }

  async getFavoritesNotes(userId: string) {
    return await this.noteRepository.getFavoriteNotesByUserId(userId);
  }
}
