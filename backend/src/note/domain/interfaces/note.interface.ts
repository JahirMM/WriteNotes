export interface NoteInterface {
  noteId?: string;
  userId: string;
  title: string;
  description: string;
  favorite: boolean;
  date?: Date;
}
