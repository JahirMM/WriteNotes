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
    <header>
      <span className="text-xl mb-9 inline-block md:text-2xl lg:text-3xl">
        Today: {formattedDate}
      </span>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
        handleSearch={handleSearch}
      />
    </header>
  );
}

export default HeaderPage;
