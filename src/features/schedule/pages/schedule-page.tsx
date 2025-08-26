import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { api } from "@/utils";
import { ScheduleList } from "../components";
import { motion } from "framer-motion";
export const SchedulePage = () => {
  const { data: schedules, isLoading: isSchedulesLoading } =
    api.schedule.getAll.useQuery();

  return (
    <PageContainer withHeader withFooter title="Schedule">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading className="mb-20 text-center">Jadwal</Heading>
        </motion.div>
        <ScheduleList
          schedules={schedules}
          isSchedulesLoading={isSchedulesLoading}
        />
      </SectionContainer>
    </PageContainer>
  );
};
