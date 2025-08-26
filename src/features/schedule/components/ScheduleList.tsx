import { renderElements } from "@/utils";
import type { Schedule } from "../types";
import { ScheduleCard } from "./ScheduleCard";
import { cn } from "@/lib/utils";
import { ScheduleCardSkeleton } from "../skeleton";
import { motion, type Variants } from "framer-motion";

type ScheduleListProps = {
  className?: string;
  schedules?: Schedule[];
  isSchedulesLoading: boolean;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ScheduleList = ({
  className,
  schedules,
  isSchedulesLoading,
}: ScheduleListProps) => {
  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3",
        className,
      )}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {isSchedulesLoading
        ? [...Array<undefined>(6)].map((_, i) => (
            <ScheduleCardSkeleton key={i} />
          ))
        : renderElements({
            of: schedules,
            keyExtractor: (schedule) => schedule.id,
            render: (schedule) => (
              <motion.div key={schedule.id} variants={itemVariants}>
                <ScheduleCard schedule={schedule} />
              </motion.div>
            ),
          })}
    </motion.div>
  );
};
