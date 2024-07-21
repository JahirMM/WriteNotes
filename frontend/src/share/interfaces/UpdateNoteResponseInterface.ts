export interface UpdateNoteResponseInterface {
  message: string;
  note: {
    title: string;
    description: string;
    favorite: boolean;
    noteId: string;
    date: string;
  };
}
