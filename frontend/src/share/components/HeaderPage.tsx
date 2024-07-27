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
    <header className="flex flex-col gap-5 col-span-full justify-evenly">
      <span className="text-xl">Today: {formattedDate}</span>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default HeaderPage;
