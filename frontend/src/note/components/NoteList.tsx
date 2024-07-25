// SKELETON
import NoteListSkeleton from "../skeletons/NoteListSkeleton";

// HOOK
import { useNotes } from "@/share/hooks/useNotes";

// COMPONENT
import Note from "./Note";

// SONNER
import { Toaster } from "sonner";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NoteList({
  onlyFavoriteNotes,
  search = "",
  setTotalNotes,
}: {
  onlyFavoriteNotes: boolean;
  search: string;
  setTotalNotes: Dispatch<SetStateAction<number>>;
}) {
  const router = useRouter();
  const { isLoading, data, isError, errorMessage } =
    useNotes(onlyFavoriteNotes);

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

  const handleAddNote = () => {
    const url = onlyFavoriteNotes
      ? `/web/favoriteNotes?action=create&title=&description=&favorite=true`
      : `/web/notes?action=create&title=&description=&favorite=false`;
    router.push(url);
  };

  useEffect(() => {
    setTotalNotes(notes?.length || 0);
  }, [notes, setTotalNotes]);

  return (
    <section className="bg-backgroundNotes p-4 rounded-xl flex flex-col gap-4 row-span-3 md:row-span-7 md:col-span-2">
      <header className="flex justify-between">
        <div className="text-sm">
          <span>Note: </span>
          <span>{notes?.length}</span>
        </div>
        <span
          className="text-colorTextPointer text-sm cursor-pointer"
          onClick={handleAddNote}
        >
          Add note
        </span>
      </header>
      {isLoading ? (
        <NoteListSkeleton />
      ) : notes && notes.length > 0 ? (
        <div className="flex gap-3 overflow-auto md:flex-col md:items-center">
          {notes?.map((note) => (
            <Note
              note={note}
              onlyFavoriteNotes={onlyFavoriteNotes}
              key={note.noteId}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            className="bg-black text-white text-sm py-3 px-5 rounded-xl"
            onClick={handleAddNote}
          >
            add note
          </button>
        </div>
      )}
      <Toaster position="top-right" richColors closeButton duration={3000} />
    </section>
  );
}

export default NoteList;
