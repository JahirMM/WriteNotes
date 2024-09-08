"use client";
// HOOK
import { useFilter } from "@/share/hooks/useFilter";
import useNoteForm from "../hooks/useNoteForm";

// COMPONENTS
import HeaderPage from "@/share/components/HeaderPage";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

import { Suspense, useState } from "react";

interface NoteComponentProps {
  onlyFavoriteNotes: boolean;
}

function NoteComponent({ onlyFavoriteNotes }: NoteComponentProps) {
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
        />
      </section>
    </>
  );
}

export default function NoteComponentWrapper(props: NoteComponentProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NoteComponent {...props} />
    </Suspense>
  );
}
