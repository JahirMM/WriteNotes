// SKELETON
import NoteListSkeleton from "../skeletons/NoteListSkeleton";

// HOOK
import { useNotes } from "@/share/hooks/useNotes";

// COMPONENT
import Note from "./Note";

// SONNER
import { Toaster } from "sonner";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useRouter } from "next/navigation";

function NoteList({
  onlyFavoriteNotes,
  search = "",
  setTotalNotes,
  showForm,
  setShowForm,
}: {
  onlyFavoriteNotes: boolean;
  search: string;
  setTotalNotes: Dispatch<SetStateAction<number>>;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { isLoading, data, isError, errorMessage } =
    useNotes(onlyFavoriteNotes);

  if (isError)
    return (
      <div className="bg-backgroundNotes p-2 rounded-xl flex flex-col justify-center items-center gap-5 md:row-start-2 md:row-end-8">
        <img src="/notes/errorNote.svg" alt="" className="w-0 md:w-3/4" />
        <span className="font-semibold">
          {errorMessage ? errorMessage : "An unknown error occurred"}
        </span>
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
    <section
      className={`bg-backgroundNotes p-4 rounded-xl flex flex-col row-start-2 row-end-6 ${
        showForm ? "hidden" : "block"
      } md:block md:col-start-1 md:col-end-3`}
    >
      <header className="text-sm flex justify-between md:mb-3">
        <div>
          <span>Note: </span>
          <span>{notes?.length}</span>
        </div>
        <span
          onClick={handleAddNote}
          className="text-colorTextPointer cursor-pointer"
        >
          Add note
        </span>
      </header>
      {isLoading ? (
        <NoteListSkeleton />
      ) : notes && notes.length > 0 ? (
        <div className="flex flex-col items-center gap-3 py-2 overflow-auto max-h-[95%] scrollVisibleNotes">
          {notes?.map((note) => (
            <Note
              note={note}
              onlyFavoriteNotes={onlyFavoriteNotes}
              showForm={showForm}
              setShowForm={setShowForm}
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
