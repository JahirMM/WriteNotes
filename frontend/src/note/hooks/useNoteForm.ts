// INTERFACE
import { NoteInterface } from "@/share/interfaces/NoteInterface";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const useNoteForm = () => {
  const searchParams = useSearchParams();
  const action = searchParams?.get("action") === "create";
  const favoriteValue = searchParams?.get("favorite");
  const isFavorite = favoriteValue === "true";

  const [initialData, setInitialData] = useState<NoteInterface>({
    noteId: searchParams?.get("noteId") || "",
    title: searchParams?.get("title") || "",
    description: searchParams?.get("description") || "",
    favorite: isFavorite,
  });

  useEffect(() => {
    setInitialData({
      noteId: searchParams?.get("noteId") || "",
      title: searchParams?.get("title") || "",
      description: searchParams?.get("description") || "",
      favorite: isFavorite,
    });
  }, [searchParams]);

  return { initialData, setInitialData, action, isFavorite };
};

export default useNoteForm;
