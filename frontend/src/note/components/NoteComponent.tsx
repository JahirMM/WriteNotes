"use client";
// HOOK
import { useFilter } from "@/share/hooks/useFilter";

// COMPONENTS
import HeaderPage from "@/share/components/HeaderPage";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

import { useState } from "react";

function NoteComponent({ onlyFavoriteNotes }: { onlyFavoriteNotes: boolean }) {
  const { filter, search, handleFilterChange, handleSearch } = useFilter();
  const [totalNotes, setTotalNotes] = useState(0);
  return (
    <main className="h-screen w-full p-2">
      <div className="bg-backgroundSecondary rounded-2xl h-full w-full p-4 grid grid-cols-1 grid-rows-8 gap-4 md:grid-cols-5">
        <HeaderPage
          filter={filter}
          handleFilterChange={handleFilterChange}
          handleSearch={handleSearch}
        />
        <NoteList
          onlyFavoriteNotes={onlyFavoriteNotes}
          search={search}
          setTotalNotes={setTotalNotes}
        />
        <NoteForm
          totalNotes={totalNotes}
          onlyFavoriteNotes={onlyFavoriteNotes}
        />
      </div>
    </main>
  );
}

export default NoteComponent;
