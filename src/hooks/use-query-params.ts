import { useRouter } from "next/router";

export const useQueryParams = <
  DivisionParams extends string = string,
  ProgramParams extends string = string,
>() => {
  const router = useRouter();

  const queryParams = {
    search: router.query.search as string,
    limit: Number(router.query.limit) || 8,
    page: Number(router.query.page) || 1,
    division: (router.query.division as DivisionParams) || undefined,
    program: (router.query.program as ProgramParams) || undefined,
  };

  const handleUpdateQuery = (newParams: Partial<typeof queryParams>) => {
    const updatedQuery = { ...router.query };

    // Update parameters with new values
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        delete updatedQuery[key];
      } else {
        updatedQuery[key] = String(value);
      }
    });

    // Reset page to 1 when filters change (except when only updating page or limit)
    const isFilterChange = Object.keys(newParams).some((key) =>
      ["search", "division", "program"].includes(key),
    );

    if (isFilterChange && !("page" in newParams)) {
      updatedQuery.page = "1";
    }

    void router.push(
      {
        pathname: router.pathname,
        query: updatedQuery,
      },
      undefined,
      { scroll: false },
    );
  };

  // Specialized method for updating filters that should reset pagination
  const handleUpdateFilter = (
    newParams: Partial<
      Pick<typeof queryParams, "search" | "division" | "program">
    >,
  ) => {
    const updatedQuery = { ...router.query };

    // Update filter parameters
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        delete updatedQuery[key];
      } else {
        updatedQuery[key] = String(value);
      }
    });

    // Always reset page to 1 when filters change
    updatedQuery.page = "1";

    void router.push(
      {
        pathname: router.pathname,
        query: updatedQuery,
      },
      undefined,
      { scroll: false },
    );
  };

  // Specialized method for pagination that doesn't affect filters
  const handleUpdatePagination = (
    newParams: Partial<Pick<typeof queryParams, "page" | "limit">>,
  ) => {
    const updatedQuery = { ...router.query };

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === Number("")) {
        delete updatedQuery[key];
      } else {
        updatedQuery[key] = String(value);
      }
    });

    void router.push(
      {
        pathname: router.pathname,
        query: updatedQuery,
      },
      undefined,
      { scroll: false },
    );
  };

  return {
    queryParams,
    handleUpdateQuery,
    handleUpdateFilter,
    handleUpdatePagination,
  };
};
