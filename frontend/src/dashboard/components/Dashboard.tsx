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
    <>
      <HeaderPage
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleSearch={handleSearch}
      />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-5 xl:gap-16">
        <div className="bg-backgroundNotes rounded-xl flex flex-col gap-3 p-3 md:col-span-full">
          <div className="text-sm flex justify-between">
            <span>Notes:</span>
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
          </div>
          <DashboardNoteList onlyFavoriteNotes={false} search={search} />
        </div>
        <div className="bg-backgroundNotes rounded-xl flex flex-col gap-3 p-3 md:col-span-full md:col-start-1 md:col-end-4">
          <div className="text-sm flex justify-between">
            <span>favorite notes:</span>
            <div>
              <Link
                href={"/web/favoriteNotes"}
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
          </div>
          <DashboardNoteList onlyFavoriteNotes={true} />
        </div>
        <DashboardScratchPad />
      </section>
    </>
  );
}

export default Dashboard;
