// SKELETON
import DashboardSkeleton from "../skeletons/DashboardSkeleton";

// COMPONENTS
import DashboardNote from "./DashboardNote";

// ICON
import Note from "@/icons/Note";
import { useNotes } from "@/share/hooks/useNotes";

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

  if (isLoading) return <DashboardSkeleton />;
  if (isError)
    return (
      <div className="h-64 w-48 flex justify-center items-center text-lg">
        Error loading notes, sorry
      </div>
    );

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
        className="bg-colorNote rounded-xl medium-note-dimensions cursor-pointer flex flex-col gap-3 justify-center items-center"
      >
        <div className="bg-backgroundIcon h-28 w-28 rounded-full flex justify-center items-center">
          <Note fill="#000" width={68} />
        </div>
        <span className="font-semibold">Notes ({notes?.length})</span>
      </Link>
    </div>
  );
}

export default DashboardNoteList;
