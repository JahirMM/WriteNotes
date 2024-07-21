import { useState } from "react";

export function useFilter() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setSearch(newFilter);
  };

  const handleSearch = () => {
    setSearch(filter);
  };

  return { search, filter, handleFilterChange, handleSearch };
}
