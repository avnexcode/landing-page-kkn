import { Pagination } from "@/components/fragments";
import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { useQueryParams } from "@/hooks";
import { api } from "@/utils";
import { TeamFilter, TeamList } from "../components";

export const TeamPage = () => {
  const { queryParams, handleUpdateQuery } = useQueryParams();

  const { data: students, isLoading } = api.student.getAll.useQuery({
    params: {
      ...queryParams,
    },
  });

  return (
    <PageContainer withHeader withFooter title="Team">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <Heading className="mb-20 text-center">Team</Heading>

        <TeamFilter className="mb-20" />

        <Pagination
          total={students?.meta.total ?? 0}
          currentPage={queryParams.page}
          limit={queryParams.limit}
          onPageChange={(page) => handleUpdateQuery({ page })}
        />

        <TeamList
          students={students?.data}
          meta={students?.meta}
          isLoading={isLoading}
        />
      </SectionContainer>
    </PageContainer>
  );
};
