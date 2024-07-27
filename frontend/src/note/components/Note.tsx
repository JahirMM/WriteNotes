// ICONS
import StartNoBackground from "@/icons/StartNoBackground";
import Start from "@/icons/Start";
import Trash from "@/icons/Trash";

// INTERFACE
import { NoteInterface } from "@/share/interfaces/NoteInterface";

// HOOKS
import { useFormatDate } from "@/share/hooks/useFormatDate";
import { useUpdateNote } from "@/share/hooks/useUpdateNote";
import { useDeleteNote } from "../hooks/useDeleteNote";

import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

function Note({
  note,
  onlyFavoriteNotes,
  showForm,
  setShowForm,
}: {
  note: NoteInterface;
  onlyFavoriteNotes: boolean;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}) {
  const { formattedDate } = useFormatDate(note.date!);
  const { updateNoteMutation } = useUpdateNote();
  const { deleteNoteMutation } = useDeleteNote();
  const searchParams = useSearchParams();

  const router = useRouter();

  const handleStarClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    updateNoteMutation.mutate({
      noteId: note.noteId,
      noteData: {
        favorite: !note.favorite,
      },
    });
    const updateUrl = note.noteId === searchParams?.get("noteId") || "";
    if (updateUrl) {
      const url = onlyFavoriteNotes
        ? `/web/favoriteNotes?title=${encodeURIComponent(
            note.title
          )}&description=${encodeURIComponent(
            note.description
          )}&favorite=${encodeURIComponent(
            note.favorite
          )}&noteId=${encodeURIComponent(note.noteId)}`
        : `/web/notes?title=${encodeURIComponent(
            note.title
          )}&description=${encodeURIComponent(
            note.description
          )}&favorite=${encodeURIComponent(
            !note.favorite
          )}&noteId=${encodeURIComponent(note.noteId)}`;
      router.push(url);
    }
  };

  const handleTrashClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    deleteNoteMutation.mutate({ noteId: note.noteId });
    const updateUrl = note.noteId === searchParams?.get("noteId") || "";
    if (updateUrl)
      onlyFavoriteNotes
        ? router.push("/web/favoriteNotes")
        : router.push("/web/notes");
  };

  const handleNoteClick = () => {
    const url = onlyFavoriteNotes
      ? `/web/favoriteNotes?title=${encodeURIComponent(
          note.title
        )}&description=${encodeURIComponent(
          note.description
        )}&favorite=${encodeURIComponent(
          note.favorite
        )}&noteId=${encodeURIComponent(note.noteId)}`
      : `/web/notes?title=${encodeURIComponent(
          note.title
        )}&description=${encodeURIComponent(
          note.description
        )}&favorite=${encodeURIComponent(
          note.favorite
        )}&noteId=${encodeURIComponent(note.noteId)}`;
    router.push(url);
  };

  return (
    <div
      className={`bg-colorNote p-3 rounded-xl flex flex-col justify-between large-note-dimensions sm:large-note-dimensions  ${
        note.noteId === searchParams?.get("noteId")
          ? "border border-colorBorder"
          : ""
      }`}
      onClick={handleNoteClick}
    >
      <header>
        <div className="flex justify-between text-sm mb-3">
          <span className="font-semibold">{note.title}</span>
          <Trash fill="#F25756" width={16} onClick={handleTrashClick} />
        </div>
        <p className="line-clamp-2 text-sm md:line-clamp-5">
          {note.description}
        </p>
      </header>
      <div className="text-xs flex justify-between">
        <span>{formattedDate}</span>
        {note.favorite ? (
          <Start
            fill="#e4de1f"
            width={18}
            onClick={handleStarClick}
            className="hover:animate-spin"
          />
        ) : (
          <StartNoBackground
            fill="#000"
            width={18}
            onClick={handleStarClick}
            className="hover:animate-spin"
          />
        )}
      </div>
    </div>
  );
}

export default Note;
