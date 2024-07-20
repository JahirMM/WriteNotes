export interface NotesResponsiveInterfaces {
  notes: [
    {
      title: string;
      description: string;
      favorite: boolean;
      noteId: string;
      date: string;
    }
  ];
  total: number;
}
