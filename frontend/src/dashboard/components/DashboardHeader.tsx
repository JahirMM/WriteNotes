import Moon from "@/icons/Moon";
import Filter from "@/share/components/Filter";

interface DashboardHeaderProps {
  filter: string;
  handleFilterChange: (newFilter: string) => void;
  handleSearch: () => void;
}

function DashboardHeader({
  filter,
  handleFilterChange,
  handleSearch,
}: DashboardHeaderProps) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });

  return (
    <header className="md:col-start-1 md:col-end-6 p-1 flex flex-col gap-4 justify-around md:gap-0">
      <div className="flex justify-between">
        <span className="text-3xl">Today: {formattedDate}</span>
        <Moon width={20} height={20} fill="#000" />
      </div>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default DashboardHeader;
