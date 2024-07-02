import { NoteRepositoryInterface } from "../../domain/interfaces/noteRepository.interface";
import { NoteInterface } from "../../domain/interfaces/note.interface";
import { Note } from "../../domain/note.domain";

export class NoteRepository implements NoteRepositoryInterface {
  async createNoteByUserId(note: NoteInterface) {
    const newNote = new Note(note);
    return await newNote.save();
  }

  async deleteNoteByNoteId(noteId: string): Promise<any> {
    const note = { noteId: noteId };
    return await Note.deleteOne(note);
  }

  async getNotesByUserId(userId: string): Promise<NoteInterface[]> {
    return await Note.find({ userId: userId });
  }

  async getANoteByNoteId(noteId: string): Promise<NoteInterface | ""> {
    const note = await Note.findOne({ noteId: noteId });
    return note !== null ? note : "";
  }

  async getFavoriteNotesByUserId(userId: string): Promise<NoteInterface[]> {
    return await Note.find({ userId: userId, favorite: true });
  }

  async updateNoteByNoteId(
    note: NoteInterface,
    noteId: string
  ): Promise<NoteInterface | null> {
    const updateNote = await Note.findOneAndUpdate(
      { noteId },
      { $set: note },
      { new: true }
    );
    return updateNote;
  }
}