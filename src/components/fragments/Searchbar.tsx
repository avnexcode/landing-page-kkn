import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { useDebounce, useQueryParams } from "@/hooks";
import { useEffect, useState } from "react";

type SearchbarProps = {
  placeholder?: string;
  className?: string;
};

export const Searchbar = ({
  placeholder = "Search...",
  className,
}: SearchbarProps) => {
  const { queryParams, handleUpdateFilter } = useQueryParams();
  const [searchValue, setSearchValue] = useState<string>(
    queryParams.search || "",
  );

  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    if (debouncedSearchValue !== (queryParams.search || "")) {
      handleUpdateFilter({ search: debouncedSearchValue || undefined });
    }
  }, [debouncedSearchValue, queryParams.search, handleUpdateFilter]);

  useEffect(() => {
    setSearchValue(queryParams.search || "");
  }, [queryParams.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        className="pr-10 pl-10"
      />
    </div>
  );
};
