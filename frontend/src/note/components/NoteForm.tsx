// HOOK
import { useUpdateNote } from "@/share/hooks/useUpdateNote";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function NoteForm({ totalNotes }: { totalNotes: number }) {
  const { updateNoteMutation } = useUpdateNote();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [initialData, setInitialData] = useState({
    noteId: searchParams?.get("noteId") || "",
    title: searchParams?.get("title") || "",
    description: searchParams?.get("description") || "",
  });

  const handleClick = async (event: any) => {
    event.preventDefault();

    updateNoteMutation.mutate({
      noteId: initialData.noteId,
      noteData: {
        title: initialData.title,
        description: initialData.description,
      },
    });

    router.push(
      `/web/notes?title=${encodeURIComponent(
        initialData.title
      )}&description=${encodeURIComponent(
        initialData.description
      )}&&noteId=${encodeURIComponent(initialData.noteId)}`
    );
  };

  useEffect(() => {
    setInitialData({
      noteId: searchParams?.get("noteId") || "",
      title: searchParams?.get("title") || "",
      description: searchParams?.get("description") || "",
    });
  }, [searchParams]);

  if (totalNotes === 0) {
    return (
      <section className="bg-backgroundNotes p-2 rounded-xl row-span-5 md:row-span-7 md:col-span-3">
        <div className="h-full p-2 rounded-xl flex flex-col gap-7 items-center justify-center">
          <img src="/notes/addNote.svg" alt="" className="w-3/4" />
        </div>
      </section>
    );
  }

  if (
    initialData.noteId === "" &&
    initialData.title === "" &&
    initialData.description === ""
  ) {
    return (
      <section className="bg-backgroundNotes p-2 rounded-xl row-span-5 md:row-span-7 md:col-span-3">
        <div className="h-full p-2 rounded-xl flex flex-col gap-7 items-center justify-center">
          <img src="/notes/selectNote.svg" alt="" className="w-3/4" />
          <span className="font-semibold">select a note</span>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-backgroundNotes p-2 rounded-xl row-span-5 md:row-span-7 md:col-span-3 form-in">
      <div className="h-full p-2 rounded-xl">
        <form action="" className="flex flex-col gap-5 h-full">
          <input
            type="text"
            placeholder="Title"
            value={initialData.title}
            onChange={(e) =>
              setInitialData({ ...initialData, title: e.target.value })
            }
            className="font-semibold text-lg p-2 bg-transparent transparent shadow-sm rounded-lg focus:outline-none focus:ring-0"
          />
          <textarea
            name="description"
            id="description"
            placeholder="Start writing"
            value={initialData.description}
            onChange={(e) =>
              setInitialData({ ...initialData, description: e.target.value })
            }
            className="resize-none text-sm flex-1 p-2 w-full bg-transparent shadow-md focus:outline-none focus:ring-0"
          ></textarea>
          <button
            className="bg-black py-2 px-3 rounded-xl text-sm text-white"
            onClick={handleClick}
          >
            Save changes
          </button>
        </form>
      </div>
    </section>
  );
}

export default NoteForm;
