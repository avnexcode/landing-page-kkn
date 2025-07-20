import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { api } from "@/utils";
import { ScheduleList } from "../components";

export const SchedulePage = () => {
  const { data: schedules, isLoading: isSchedulesLoading } =
    api.schedule.getAll.useQuery();

  return (
    <PageContainer withHeader withFooter title="Schedule">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <Heading className="mb-20 text-center">Jadwal</Heading>
        <ScheduleList
          schedules={schedules}
          isSchedulesLoading={isSchedulesLoading}
        />
      </SectionContainer>
    </PageContainer>
  );
};
