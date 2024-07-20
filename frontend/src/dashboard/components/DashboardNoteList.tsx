"use client";

// COMPONENTS
import DashboardNote from "./DashboardNote";

// ICON
import Note from "@/icons/Note";

// HOOK
import { useNotes } from "@/share/hooks/useNotes";

import Link from "next/link";

interface DashboardNoteListProps {
  onlyFavoriteNotes: boolean;
}

function DashboardNoteList({ onlyFavoriteNotes }: DashboardNoteListProps) {
  const { isLoading, isError, data, errorMessage } =
    useNotes(onlyFavoriteNotes);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading notes: {errorMessage}</div>;

  const notes = data?.notes || [];

  return (
    <div className="flex gap-3 overflow-auto scrollVisible">
      {notes.map((note) => (
        <DashboardNote
          key={note.noteId}
          title={note.title}
          description={note.description}
          date={note.date}
          favorite={note.favorite}
        />
      ))}
      <Link
        href={onlyFavoriteNotes ? "/web/favoriteNotes" : "/web/notes"}
        className="bg-colorNote min-h-64 min-w-48 max-h-64 max-w-48 rounded-xl cursor-pointer flex flex-col gap-3 justify-center items-center"
      >
        <div className="bg-backgroundIcon h-28 w-28 rounded-full flex justify-center items-center">
          <Note fill="#000" width={68} />
        </div>
        <span className="font-semibold">Notes ({notes.length})</span>
      </Link>
    </div>
  );
}

export default DashboardNoteList;
