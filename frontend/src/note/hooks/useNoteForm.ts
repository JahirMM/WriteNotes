"use client";

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

  const [showForm, setShowForm] = useState(initialData.noteId !== "" || action);

  useEffect(() => {
    const noteId = searchParams?.get("noteId") || "";
    const action = searchParams?.get("action") === "create";
    const favorite = searchParams?.get("favorite") === "true";

    setInitialData({
      noteId,
      title: searchParams?.get("title") || "",
      description: searchParams?.get("description") || "",
      favorite,
    });

    setShowForm(noteId !== "" || action);
  }, [searchParams]);

  return {
    initialData,
    setInitialData,
    action,
    isFavorite,
    showForm,
    setShowForm,
  };
};

export default useNoteForm;
