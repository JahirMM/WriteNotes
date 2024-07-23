// HOOK
import { useNotes } from "@/share/hooks/useNotes";

// COMPONENT
import Note from "./Note";

// SONNER
import { Toaster } from "sonner";

function NoteList({
  onlyFavoriteNotes,
  search = "",
}: {
  onlyFavoriteNotes: boolean;
  search: string;
}) {
  const { isLoading, data, isError, errorMessage } =
    useNotes(onlyFavoriteNotes);

  if (isLoading) return <div>cargando</div>;
  if (isError)
    return (
      <div className="bg-backgroundNotes p-4 rounded-xl flex flex-col gap-4 row-span-3 md:row-span-7 md:col-span-2">
        {errorMessage}
      </div>
    );

  const notes =
    search !== ""
      ? data?.notes.filter((note) =>
          note.title.toLowerCase().includes(search!.toLowerCase())
        )
      : data?.notes || [];
  return (
    <section className="bg-backgroundNotes p-4 rounded-xl flex flex-col gap-4 row-span-3 md:row-span-7 md:col-span-2">
      <header className="text-sm flex justify-between">
        <span>Notes</span>
        <span>62 notes</span>
      </header>
      <div className="flex gap-3 overflow-auto md:flex-col md:items-center">
        {notes?.map((note) => (
          <Note note={note} key={note.noteId} />
        ))}
      </div>
      <Toaster position="top-right" richColors closeButton duration={3000} />
    </section>
  );
}

export default NoteList;
