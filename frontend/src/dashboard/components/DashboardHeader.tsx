import Search from "@/icons/Search";

function DashboardHeader() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
  return (
    <header className="md:col-start-1 md:col-end-6 p-1 flex flex-col gap-4 justify-around md:gap-0">
      <span className="text-3xl">Today: {formattedDate}</span>
      <div className="border border-colorBorder flex gap-3 rounded-2xl py-1 px-2 items-center justify-center">
        <Search fill="#000" width={18} className="hidden sm:flex" />
        <input
          type="text"
          placeholder="Search notes"
          className="flex-1 p-1 rounded-xl bg-transparent text-sm focus:outline-none focus:ring-0"
        />
      </div>
    </header>
  );
}

export default DashboardHeader;
