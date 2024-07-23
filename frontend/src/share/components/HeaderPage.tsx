import Filter from "@/share/components/Filter";

interface DashboardHeaderProps {
  filter: string;
  handleFilterChange: (newFilter: string) => void;
  handleSearch: () => void;
}

function HeaderPage({
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
    <header className="flex flex-col gap-4 justify-around md:col-start-1 md:col-end-6">
      <span className="text-xl sm:text-3xl">Today: {formattedDate}</span>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default HeaderPage;
