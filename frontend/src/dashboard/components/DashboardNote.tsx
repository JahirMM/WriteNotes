// ICONS
import StartNoBackground from "@/icons/StartNoBackground";
import Start from "@/icons/Start";

// INTERFACE
import { NoteInterface } from "@/share/interfaces/NoteInterface";

// HOOKS
import { useChangeTheme } from "@/share/hooks/useChangeTheme";
import { useFormatDate } from "@/share/hooks/useFormatDate";
import { useUpdateNote } from "@/share/hooks/useUpdateNote";

import { useRouter } from "next/navigation";

function DashboardNote({ note }: { note: NoteInterface }) {
  const router = useRouter();
  const { theme } = useChangeTheme();
  const { updateNoteMutation } = useUpdateNote();
  const { formattedDate } = useFormatDate(note.date!);

  const handleStarClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    updateNoteMutation.mutate({
      noteId: note.noteId,
      noteData: {
        favorite: !note.favorite,
      },
    });
  };

  const handleNoteClick = () => {
    router.push(
      `/web/notes?title=${encodeURIComponent(
        note.title
      )}&description=${encodeURIComponent(
        note.description
      )}&favorite=${encodeURIComponent(
        note.favorite
      )}&noteId=${encodeURIComponent(note.noteId)}`
    );
  };

  return (
    <div
      className="bg-colorNote rounded-xl medium-note-dimensions p-2 mb-4 flex flex-col justify-between cursor-pointer dark:bg-colorNoteDark"
      onClick={handleNoteClick}
    >
      <div className="text-sm text-colorText space-y-2 dark:text-colorTextDrak">
        <p className="font-bold dark:text-colorTextPointer">{note.title}</p>
        <p className="line-clamp-6 font-normal">{note.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-colorText dark:text-colorTextDrak dark:font-light">
          {formattedDate}
        </span>
        {note.favorite ? (
          <Start
            fill="#e4de1f"
            width={18}
            onClick={handleStarClick}
            className="hover:animate-spin"
          />
        ) : (
          <StartNoBackground
            fill={`${theme === "light" ? "#000" : "#fff"}`}
            width={18}
            onClick={handleStarClick}
            className="hover:animate-spin"
          />
        )}
      </div>
    </div>
  );
}

export default DashboardNote;
