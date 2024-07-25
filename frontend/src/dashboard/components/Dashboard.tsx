"use client";

// COMPONENTS
import DashboardScratchPad from "./DashboardScratchPad";
import HeaderPage from "@/share/components/HeaderPage";
import DashboardNoteList from "./DashboardNoteList";

// HOOK
import { useFilter } from "@/share/hooks/useFilter";

import { useRouter } from "next/navigation";
import Link from "next/link";

function Dashboard() {
  const { filter, search, handleFilterChange, handleSearch } = useFilter();
  const router = useRouter();

  const handleAddNote = (isFavoriteNote: boolean) => {
    const url = isFavoriteNote
      ? `/web/favoriteNotes?action=create&title=&description=&favorite=true`
      : `/web/notes?action=create&title=&description=&favorite=false`;
    router.push(url);
  };

  return (
    <div className="h-screen w-full p-2">
      <div className="bg-backgroundSecondary rounded-2xl overflow-auto scrollHidden h-full w-full p-4 grid grid-cols-1 gap-4 md:grid-cols-5">
        <HeaderPage
          filter={filter}
          handleFilterChange={handleFilterChange}
          handleSearch={handleSearch}
        />
        <section className="bg-backgroundNotes rounded-xl p-3 flex flex-col justify-around gap-4 md:gap-0 md:col-span-5">
          <header className="text-sm flex justify-between">
            <span>Notes</span>
            <div className="flex gap-3">
              <Link
                href={"/web/notes"}
                className="text-colorTextPointer cursor-pointer"
              >
                View all
              </Link>
              <span
                className="text-colorTextPointer cursor-pointer"
                onClick={() => handleAddNote(false)}
              >
                add
              </span>
            </div>
          </header>
          <DashboardNoteList onlyFavoriteNotes={false} search={search} />
        </section>
        <section className="bg-backgroundNotes rounded-xl p-3 flex flex-col justify-around gap-4 row-start-4 row-end-5 md:row-start-3 md:gap-0 md:row-end-4 md:col-span-3">
          <header className="text-sm mb-5 flex justify-between">
            <span>Favorites notes</span>
            <span
              className="text-colorTextPointer cursor-pointer"
              onClick={() => handleAddNote(true)}
            >
              add
            </span>
          </header>
          <DashboardNoteList onlyFavoriteNotes={true} />
        </section>
        <DashboardScratchPad />
      </div>
    </div>
  );
}

export default Dashboard;
