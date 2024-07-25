import { useRouter } from "next/navigation";

function AddNotePrompt({ onlyFavoriteNotes }: { onlyFavoriteNotes: boolean }) {
  const { push } = useRouter();
  const handleAddNote = () => {
    const url = onlyFavoriteNotes
      ? `/web/favoriteNotes?action=create&title=&description=&favorite=true`
      : `/web/notes?action=create&title=&description=&favorite=false`;
    push(url);
  };
  return (
    <section className="bg-backgroundNotes p-2 rounded-xl row-span-5 md:row-span-7 md:col-span-3">
      <div className="h-full p-2 rounded-xl flex flex-col gap-7 items-center justify-center">
        <img
          src="/notes/addNote.svg"
          alt=""
          className="w-3/4 cursor-pointer"
          onClick={handleAddNote}
        />
      </div>
    </section>
  );
}

export default AddNotePrompt;
