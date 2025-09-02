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
  const { queryParams, handleUpdateFilter, isReady } = useQueryParams();

  const [searchValue, setSearchValue] = useState<string>("");
  const [isInitialized, setIsInitialized] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    if (isReady && !isInitialized) {
      setSearchValue(queryParams.search || "");
      setIsInitialized(true);
    }
  }, [isReady, queryParams.search, isInitialized]);

  useEffect(() => {
    if (isInitialized && debouncedSearchValue !== (queryParams.search || "")) {
      handleUpdateFilter({ search: debouncedSearchValue || undefined });
    }
  }, [
    debouncedSearchValue,
    queryParams.search,
    handleUpdateFilter,
    isInitialized,
  ]);

  useEffect(() => {
    if (isInitialized && searchValue !== (queryParams.search || "")) {
      setSearchValue(queryParams.search || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams.search, isInitialized]);

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
