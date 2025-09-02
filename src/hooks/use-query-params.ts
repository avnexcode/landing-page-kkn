import { useRouter } from "next/router";

export const useQueryParams = <
  DivisionParams extends string = string,
  ProgramParams extends string = string,
>() => {
  const router = useRouter();

  const isReady = router.isReady;

  const queryParams = {
    search: (router.query.search as string) || "",
    limit: Number(router.query.limit) || 8,
    page: Number(router.query.page) || 1,
    division: (router.query.division as DivisionParams) || undefined,
    program: (router.query.program as ProgramParams) || undefined,
  };

  const handleUpdateQuery = (newParams: Partial<typeof queryParams>) => {
    if (!isReady) return;

    const updatedQuery = { ...router.query };

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        delete updatedQuery[key];
      } else {
        updatedQuery[key] = String(value);
      }
    });

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

  const handleUpdateFilter = (
    newParams: Partial<
      Pick<typeof queryParams, "search" | "division" | "program">
    >,
  ) => {
    if (!isReady) return;

    const updatedQuery = { ...router.query };

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        delete updatedQuery[key];
      } else {
        updatedQuery[key] = String(value);
      }
    });

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

  const handleUpdatePagination = (
    newParams: Partial<Pick<typeof queryParams, "page" | "limit">>,
  ) => {
    if (!isReady) return;

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
    isReady,
  };
};
