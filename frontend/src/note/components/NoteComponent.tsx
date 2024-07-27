"use client";
// HOOK
import { useFilter } from "@/share/hooks/useFilter";

// COMPONENTS
import HeaderPage from "@/share/components/HeaderPage";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

import { useEffect, useState } from "react";
import useNoteForm from "../hooks/useNoteForm";
import { useSearchParams } from "next/navigation";

function NoteComponent({ onlyFavoriteNotes }: { onlyFavoriteNotes: boolean }) {
  const { filter, search, handleFilterChange, handleSearch } = useFilter();
  const [totalNotes, setTotalNotes] = useState(0);

  const { initialData, action } = useNoteForm();
  const [showForm, setShowForm] = useState(initialData.noteId !== "" || action);

  const searchParams = useSearchParams();

  useEffect(() => {
    const noteId = searchParams?.get("noteId") || "";
    const action = searchParams?.get("action") === "create";
    setShowForm(noteId !== "" || action);
  }, [searchParams]);

  return (
    <main className="h-screen w-full p-2">
      <div className="grid grid-cols-1 grid-rows-5 gap-4 h-full md:grid-cols-5">
        <HeaderPage
          filter={filter}
          handleFilterChange={handleFilterChange}
          handleSearch={handleSearch}
        />
        <NoteList
          onlyFavoriteNotes={onlyFavoriteNotes}
          search={search}
          setTotalNotes={setTotalNotes}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        <NoteForm
          totalNotes={totalNotes}
          onlyFavoriteNotes={onlyFavoriteNotes}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      </div>
    </main>
  );
}

export default NoteComponent;
