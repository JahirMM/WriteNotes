// ICON
import Search from "@/icons/Search";
import { useChangeTheme } from "../hooks/useChangeTheme";

interface FilterProps {
  filter: string;
  handleFilterChange: (newFilter: string) => void;
  handleSearch: () => void;
}

function Filter({ filter, handleFilterChange, handleSearch }: FilterProps) {
  const { theme } = useChangeTheme();
  return (
    <div className="border border-colorBorder flex gap-3 rounded-2xl p-2 items-center justify-center">
      <Search
        fill="#000"
        width={18}
        className="hidden sm:flex"
        onClick={handleSearch}
      />
      <input
        type="text"
        placeholder="Search notes"
        className="text-colorText flex-1 rounded-xl bg-transparent text-sm focus:outline-none focus:ring-0 dark:text-colorTextDrak"
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
}

export default Filter;
