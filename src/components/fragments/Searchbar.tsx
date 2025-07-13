// SearchComponent.tsx - Example usage for search
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

import { useState, useEffect } from "react";
import { useDebounce, useQueryParams } from "@/hooks";

type SearchComponentProps = {
  placeholder?: string;
  className?: string;
};

export const SearchComponent = ({
  placeholder = "Search...",
  className,
}: SearchComponentProps) => {
  const { queryParams, handleUpdateFilter } = useQueryParams();
  const [searchValue, setSearchValue] = useState<string>(
    queryParams.search || "",
  );

  // Optional: Use debounce to avoid too many URL updates
  const debouncedSearchValue = useDebounce(searchValue, 300);

  // Update URL when debounced value changes
  useEffect(() => {
    if (debouncedSearchValue !== (queryParams.search || "")) {
      handleUpdateFilter({ search: debouncedSearchValue || undefined });
    }
  }, [debouncedSearchValue, queryParams.search, handleUpdateFilter]);

  // Update local state when URL changes (e.g., browser back/forward)
  useEffect(() => {
    setSearchValue(queryParams.search || "");
  }, [queryParams.search]);

  const handleClear = () => {
    setSearchValue("");
    handleUpdateFilter({ search: undefined });
  };

  return (
    <div className={`relative ${className}`}>
      <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="pr-10 pl-10"
      />
      {searchValue && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className="hover:bg-muted absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
