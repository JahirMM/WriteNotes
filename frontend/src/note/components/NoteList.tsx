// ICON
import Start from "@/icons/Start";
import Trash from "@/icons/Trash";

function NoteList({ onlyFavorites }: { onlyFavorites: boolean }) {
  return (
    <section className="bg-backgroundNotes p-2 rounded-xl flex flex-col gap-4 row-span-3 md:row-span-7 md:col-span-2">
      <header className="text-sm flex justify-between">
        <span>Notes</span>
        <span>62 notes</span>
      </header>
      <div className="flex gap-3 overflow-auto md:flex-col md:items-center">
        <div className="bg-colorNote small-note-dimensions p-3 rounded-xl flex flex-col justify-between md:large-note-dimensions">
          <header>
            <div className="flex justify-between text-sm mb-3">
              <span className="font-semibold">Title</span>
              <Trash fill="#F25756" width={16} />
            </div>
            <p className="line-clamp-6 text-sm">description</p>
          </header>
          <div className="text-xs flex justify-between">
            <span>date</span>
            <Start fill="#e4de1f" width={18} className="hover:animate-spin" />
          </div>
        </div>
        <div className="bg-colorNote small-note-dimensions p-3 rounded-xl min-h-60 flex flex-col justify-between lg:large-note-dimensions md:large-note-dimensions">
          <header>
            <div className="flex justify-between text-sm mb-3">
              <span className="font-semibold">Title</span>
              <Trash fill="#F25756" width={16} />
            </div>
            <p className="line-clamp-6 text-sm">description</p>
          </header>
          <div className="text-xs flex justify-between">
            <span>date</span>
            <Start fill="#e4de1f" width={18} className="hover:animate-spin" />
          </div>
        </div>
        <div className="bg-colorNote small-note-dimensions p-3 rounded-xl flex flex-col justify-between lg:large-note-dimensions md:large-note-dimensions">
          <header>
            <div className="flex justify-between text-sm mb-3">
              <span className="font-semibold">Title</span>
              <Trash fill="#F25756" width={16} />
            </div>
            <p className="line-clamp-6 text-sm">description</p>
          </header>
          <div className="text-xs flex justify-between">
            <span>date</span>
            <Start fill="#e4de1f" width={18} className="hover:animate-spin" />
          </div>
        </div>
        <div className="bg-colorNote small-note-dimensions p-3 rounded-xl flex flex-col justify-between lg:large-note-dimensions md:large-note-dimensions">
          <header>
            <div className="flex justify-between text-sm mb-3">
              <span className="font-semibold">Title</span>
              <Trash fill="#F25756" width={16} />
            </div>
            <p className="line-clamp-6 text-sm">description</p>
          </header>
          <div className="text-xs flex justify-between">
            <span>date</span>
            <Start fill="#e4de1f" width={18} className="hover:animate-spin" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoteList;
