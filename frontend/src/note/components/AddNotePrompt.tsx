import { useRouter } from "next/navigation";

function AddNotePrompt({
  onlyFavoriteNotes,
  showForm,
}: {
  onlyFavoriteNotes: boolean;
  showForm: boolean;
}) {
  const { push } = useRouter();
  const handleAddNote = () => {
    const url = onlyFavoriteNotes
      ? `/web/favoriteNotes?action=create&title=&description=&favorite=true`
      : `/web/notes?action=create&title=&description=&favorite=false`;
    push(url);
  };
  return (
    <section
      className={`bg-backgroundNotes p-2 rounded-xl ${
        showForm ? "block" : "hidden"
      } md:block dark:bg-backgroundNotesDark`}
    >
      <div className="h-full p-2 rounded-xl flex flex-col gap-7 items-center justify-center">
        <img
          src="/notes/addNote.svg"
          alt=""
          className="w-0 cursor-pointer md:w-3/4"
          onClick={handleAddNote}
        />
        <span
          className="font-semibold text-colorText dark:text-colorTextDrak"
          onClick={handleAddNote}
        >
          Add note
        </span>
      </div>
    </section>
  );
}

export default AddNotePrompt;
