import { NoteInterface } from "./interfaces/note.interface";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const noteSchema = new mongoose.Schema<NoteInterface>({
  noteId: { type: String, default: uuidv4, required: true, unique: true },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  favorite: Boolean,
  date: { type: Date, default: Date.now, required: true },
});

export const Note = mongoose.model<NoteInterface>("notes", noteSchema);
