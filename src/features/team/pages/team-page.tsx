import { Pagination, Searchbar } from "@/components/fragments";
import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { useQueryParams } from "@/hooks";
import { api } from "@/utils";
import { motion } from "framer-motion";
import { TeamFilter, TeamList } from "../components";

export const TeamPage = () => {
  const { queryParams, handleUpdateQuery } = useQueryParams();

  const { data: students, isLoading: isStudentsLoading } =
    api.student.getAll.useQuery({
      params: {
        ...queryParams,
      },
    });

  return (
    <PageContainer withHeader withFooter title="Team">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading className="mb-20 text-center">Team</Heading>
        </motion.div>

        <header className="mb-10 xl:mb-20">
          <div className="mb-5 flex flex-col space-y-5 xl:flex-row">
            <TeamFilter className="w-full" />

            <Pagination
              total={students?.meta.total ?? 0}
              currentPage={queryParams.page}
              limit={queryParams.limit}
              onPageChange={(page) => handleUpdateQuery({ page })}
              className="flex justify-end xl:max-w-fit"
            />
          </div>

          <Searchbar />
        </header>

        <TeamList
          students={students?.data}
          meta={students?.meta}
          isStudentsLoading={isStudentsLoading}
        />
      </SectionContainer>
    </PageContainer>
  );
};
