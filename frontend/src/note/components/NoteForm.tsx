// HOOK
import { useUpdateNote } from "@/share/hooks/useUpdateNote";
import { useCreateNote } from "../hooks/useCreateNote";
import useNoteForm from "../hooks/useNoteForm";

// COMPONENTS
import NotesFormHeader from "./NotesFormHeader";
import AddNotePrompt from "./AddNotePrompt";
import SelectNote from "./SelectNote";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface NoteFormProps {
  totalNotes: number;
  onlyFavoriteNotes: boolean;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}
function NoteForm({
  totalNotes,
  onlyFavoriteNotes,
  showForm,
  setShowForm,
}: NoteFormProps) {
  const { updateNoteMutation } = useUpdateNote();
  const { createNoteMutation } = useCreateNote();
  const { initialData, setInitialData, action, isFavorite } = useNoteForm();
  const router = useRouter();

  const handleStarClick = () => {
    const newFavoriteStatus = !initialData.favorite;

    if (action) {
      const url = onlyFavoriteNotes
        ? `/web/favoriteNotes?action=create&title=${encodeURIComponent(
            initialData.title
          )}&description=${encodeURIComponent(
            initialData.description
          )}&favorite=${newFavoriteStatus}`
        : `/web/notes?action=create&title=${encodeURIComponent(
            initialData.title
          )}&description=${encodeURIComponent(
            initialData.description
          )}&favorite=${newFavoriteStatus}`;
      return router.push(url);
    }

    updateNoteMutation.mutate({
      noteId: initialData.noteId,
      noteData: { favorite: newFavoriteStatus },
    });

    const url = onlyFavoriteNotes
      ? `/web/favoriteNotes`
      : `/web/notes?title=${encodeURIComponent(
          initialData.title
        )}&description=${encodeURIComponent(
          initialData.description
        )}&favorite=${newFavoriteStatus}&noteId=${encodeURIComponent(
          initialData.noteId
        )}`;
    router.push(url);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInitialData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClick = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (action) {
      const data = {
        title: initialData.title,
        description: initialData.description,
        favorite: initialData.favorite,
      };

      const res = await createNoteMutation.mutateAsync(data);
      const url = res.data.favorite
        ? `/web/favoriteNotes?title=${encodeURIComponent(
            res.data.title
          )}&description=${encodeURIComponent(
            res.data.description
          )}&favorite=${encodeURIComponent(
            res.data.favorite
          )}&noteId=${encodeURIComponent(res.data.noteId)}`
        : `/web/notes?title=${encodeURIComponent(
            res.data.title
          )}&description=${encodeURIComponent(
            res.data.description
          )}&favorite=${encodeURIComponent(
            res.data.favorite
          )}&noteId=${encodeURIComponent(res.data.noteId)}`;
      return router.push(url);
    }

    updateNoteMutation.mutate({
      noteId: initialData.noteId,
      noteData: {
        title: initialData.title,
        description: initialData.description,
      },
    });

    const url = onlyFavoriteNotes
      ? `/web/favoriteNotes?title=${encodeURIComponent(
          initialData.title
        )}&description=${encodeURIComponent(
          initialData.description
        )}&favorite=${encodeURIComponent(
          initialData.favorite
        )}&noteId=${encodeURIComponent(initialData.noteId)}`
      : `/web/notes?title=${encodeURIComponent(
          initialData.title
        )}&description=${encodeURIComponent(
          initialData.description
        )}&favorite=${encodeURIComponent(
          initialData.favorite
        )}&noteId=${encodeURIComponent(initialData.noteId)}`;
    router.push(url);
  };

  if (totalNotes === 0 && !action) {
    return (
      <AddNotePrompt
        onlyFavoriteNotes={onlyFavoriteNotes}
        showForm={showForm}
      />
    );
  }

  if (
    !action &&
    !initialData.noteId &&
    !initialData.title &&
    !initialData.description
  ) {
    return <SelectNote showForm={showForm} />;
  }

  return (
    <section
      className={`bg-backgroundNotes rounded-xl p-2 row-start-2 row-end-6 ${
        showForm ? "block" : "hidden"
      } md:block md:col-start-3 md:col-end-6`}
    >
      <form className="p-2 flex flex-col gap-5 h-full">
        <NotesFormHeader
          title={initialData.title}
          favorite={initialData.favorite}
          onTitleChange={handleInputChange}
          onFavoriteClick={handleStarClick}
        />
        <textarea
          name="description"
          placeholder="Start writing"
          value={initialData.description}
          onChange={handleInputChange}
          className="flex-1 p-2 w-full resize-none text-sm bg-transparent shadow-md focus:outline-none focus:ring-0"
        ></textarea>
        <button
          className="bg-black py-2 px-3 rounded-xl text-sm text-white"
          onClick={handleClick}
        >
          {action ? "Create note" : "Save changes"}
        </button>
      </form>
    </section>
  );
}

export default NoteForm;
