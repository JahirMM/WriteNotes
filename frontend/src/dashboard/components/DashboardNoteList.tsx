// COMPONENTS
import DashboardNote from "./DashboardNote";

// ICON
import Note from "@/icons/Note";
import { useNotes } from "@/share/hooks/useNotes";

// SONNER
import { Toaster } from "sonner";

import Link from "next/link";

function DashboardNoteList({
  onlyFavoriteNotes,
  search = "",
}: {
  onlyFavoriteNotes: boolean;
  search?: string;
}) {
  const { isLoading, isError, data, errorMessage } =
    useNotes(onlyFavoriteNotes);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading notes: {errorMessage}</div>;

  const notes =
    search !== ""
      ? data?.notes.filter((note) =>
          note.title.toLowerCase().includes(search!.toLowerCase())
        )
      : data?.notes || [];

  return (
    <div className="flex gap-3 overflow-auto scrollVisible">
      {notes?.map((note) => (
        <DashboardNote key={note.noteId} note={note} />
      ))}
      <Link
        href={onlyFavoriteNotes ? "/web/favoriteNotes" : "/web/notes"}
        className="bg-colorNote min-h-64 min-w-48 max-h-64 max-w-48 rounded-xl cursor-pointer flex flex-col gap-3 justify-center items-center"
      >
        <div className="bg-backgroundIcon h-28 w-28 rounded-full flex justify-center items-center">
          <Note fill="#000" width={68} />
        </div>
        <span className="font-semibold">Notes ({notes?.length})</span>
      </Link>
      <Toaster position="top-right" richColors closeButton duration={3000} />
    </div>
  );
}

export default DashboardNoteList;
