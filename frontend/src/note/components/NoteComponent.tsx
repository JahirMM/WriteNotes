"use client";
// HOOK
import { useFilter } from "@/share/hooks/useFilter";
import useNoteForm from "../hooks/useNoteForm";

// COMPONENTS
import HeaderPage from "@/share/components/HeaderPage";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

import { useState } from "react";

function NoteComponent({ onlyFavoriteNotes }: { onlyFavoriteNotes: boolean }) {
  const { filter, search, handleFilterChange, handleSearch } = useFilter();
  const [totalNotes, setTotalNotes] = useState(0);

  const { showForm, setShowForm } = useNoteForm();

  return (
    <>
      <HeaderPage
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleSearch={handleSearch}
      />
      <section className="h-screen mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
        <NoteList
          onlyFavoriteNotes={onlyFavoriteNotes}
          search={search}
          setTotalNotes={setTotalNotes}
          showForm={showForm}
        />
        <NoteForm
          totalNotes={totalNotes}
          onlyFavoriteNotes={onlyFavoriteNotes}
          showForm={showForm}
          setShowForm={setShowForm}
        />
      </section>
    </>
  );
}

export default NoteComponent;
