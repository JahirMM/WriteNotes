// COMPONENTS
import DashboardNoteList from "./DashboardNoteList";
import DashboardHeader from "./DashboardHeader";
import DashboardMemoPad from "./DashboardMemoPad";

function Dashboard() {
  return (
    <div className="h-screen w-full p-2">
      <div className="bg-backgroundDashboard rounded-2xl overflow-auto scrollHidden h-full w-full p-4 grid grid-cols-1 gap-4 md:grid-cols-5">
        <DashboardHeader />
        <section className="bg-backgroundNotes rounded-xl p-3 flex flex-col justify-around gap-4 md:gap-0 md:col-span-5">
          <header className="text-sm flex justify-between">
            <span>Notes</span>
            <div className="flex gap-3">
              <span className="text-colorTextPointer cursor-pointer">
                View all
              </span>
              <span className="text-colorTextPointer cursor-pointer">add</span>
            </div>
          </header>
          <DashboardNoteList onlyFavoriteNotes={false} />
        </section>
        <section className="bg-backgroundNotes rounded-xl p-3 flex flex-col justify-around gap-4 row-start-4 row-end-5 md:row-start-3 md:gap-0 md:row-end-4 md:col-span-3">
          <header className="text-sm mb-5 flex justify-between">
            <span>Favorites notes</span>
          </header>
          <DashboardNoteList onlyFavoriteNotes={true} />
        </section>
        <DashboardMemoPad />
      </div>
    </div>
  );
}

export default Dashboard;
