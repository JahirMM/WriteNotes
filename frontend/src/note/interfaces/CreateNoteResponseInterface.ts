export interface CreateNoteResponseInterface {
  message: string;
  data: {
    title: string;
    description: string;
    favorite: boolean;
    noteId: boolean;
    date: string;
  };
}
