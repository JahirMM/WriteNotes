import Start from "@/icons/Start";
import StartNoBackground from "@/icons/StartNoBackground";
import { useFormatDate } from "@/share/hooks/useFormatDate";
import { useUpdateNote } from "@/share/hooks/useUpdateNote";
import { NoteInterface } from "@/share/interfaces/NoteInterface";
import { useRouter } from "next/navigation";

function DashboardNote({ note }: { note: NoteInterface }) {
  const router = useRouter();
  const { formattedDate } = useFormatDate(note.date!);
  const { updateNoteMutation } = useUpdateNote();

  const handleStarClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Previene que el clic se propague al contenedor padre
    updateNoteMutation.mutate({
      noteId: note.noteId,
      noteData: {
        favorite: !note.favorite,
      },
    });
  };

  const handleNoteClick = () => {
    router.push(
      `/web/notes?title=${note.title}&description=${note.description}&isFavorite=${note.favorite}&date=${note.date}`
    );
  };

  return (
    <div
      className="bg-colorNote min-h-64 min-w-48 max-h-64 max-w-48 rounded-xl p-2 mb-4 flex flex-col justify-between cursor-pointer"
      onClick={handleNoteClick}
    >
      <div className="text-sm space-y-2">
        <p className="font-semibold">{note.title}</p>
        <p className="line-clamp-6">{note.description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs">{formattedDate}</span>
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

export default DashboardNote;
