// SKELETON
import NoteListSkeleton from "../skeletons/NoteListSkeleton";

// HOOK
import { useNotes } from "@/share/hooks/useNotes";

// COMPONENT
import Note from "./Note";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useRouter } from "next/navigation";

function NoteList({
  onlyFavoriteNotes,
  search = "",
  setTotalNotes,
  showForm,
}: {
  onlyFavoriteNotes: boolean;
  search: string;
  setTotalNotes: Dispatch<SetStateAction<number>>;
  showForm: boolean;
}) {
  const router = useRouter();
  const { isLoading, data, isError, errorMessage } =
    useNotes(onlyFavoriteNotes);

  if (isError)
    return (
      <div className="bg-backgroundNotes p-2 rounded-xl flex flex-col justify-center items-center gap-5 md:row-start-2 md:row-end-8 dark:bg-backgroundNotesDark">
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
    <div
      className={`bg-backgroundNotes rounded-xl p-4 h-full overflow-hidden ${
        showForm ? "hidden" : "block"
      } md:block dark:bg-backgroundNotesDark`}
    >
      <header className="text-sm flex justify-between mb-4">
        <div className="text-colorText dark:text-colorTextDrak">
          <span>Note: </span>
          <span>{notes?.length}</span>
        </div>
        <span
          className="text-colorTextPointer cursor-pointer dark:font-bold dark:text-colorTextPointerDark"
          onClick={handleAddNote}
        >
          Add note
        </span>
      </header>
      {isLoading ? (
        <NoteListSkeleton />
      ) : notes && notes.length > 0 ? (
        <div className="flex flex-col gap-3 items-center max-h-[95%] overflow-auto">
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
    </div>
  );
}

export default NoteList;
