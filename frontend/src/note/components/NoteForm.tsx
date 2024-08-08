// HOOK
import { useUpdateNote } from "@/share/hooks/useUpdateNote";
import { useCreateNote } from "../hooks/useCreateNote";
import useNoteForm from "../hooks/useNoteForm";

// COMPONENTS
import CloseFormButton from "./CloseFormButton";
import NotesFormHeader from "./NotesFormHeader";
import AddNotePrompt from "./AddNotePrompt";
import SelectNote from "./SelectNote";

import { useRouter } from "next/navigation";

interface NoteFormProps {
  totalNotes: number;
  onlyFavoriteNotes: boolean;
  showForm: boolean;
}
function NoteForm({ totalNotes, onlyFavoriteNotes, showForm }: NoteFormProps) {
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
      className={`${
        showForm ? "block" : "hidden"
      } bg-backgroundNotes rounded-xl p-4 md:block dark:bg-backgroundNotesDark`}
    >
      <form className={`p-2 flex flex-col h-full md:gap-0`}>
        <CloseFormButton onlyFavoriteNotes={onlyFavoriteNotes} />
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
          className="flex-1 p-2 mt-5 w-full resize-none text-sm bg-transparent shadow-md focus:outline-none focus:ring-0 dark:bg-backgroundNavBarOptionDark"
        ></textarea>
        <button
          className="bg-black py-2 px-3 rounded-xl text-sm text-white mt-4"
          onClick={handleClick}
        >
          {action ? "Create note" : "Save changes"}
        </button>
      </form>
    </section>
  );
}

export default NoteForm;
