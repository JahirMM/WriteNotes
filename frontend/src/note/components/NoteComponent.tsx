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
    <main className="h-screen w-full p-2">
      <div className="bg-backgroundSecondary rounded-2xl p-4 grid grid-cols-1 grid-rows-5 gap-4 h-full md:grid-cols-5">
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
