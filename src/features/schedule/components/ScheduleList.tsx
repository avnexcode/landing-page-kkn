import { renderElements } from "@/utils";
import type { Schedule } from "../types";
import { ScheduleCard } from "./ScheduleCard";
import { cn } from "@/lib/utils";
import { ScheduleCardSkeleton } from "../skeleton";

type ScheduleListProps = {
  className?: string;
  schedules?: Schedule[];
  isSchedulesLoading: boolean;
};

export const ScheduleList = ({
  className,
  schedules,
  isSchedulesLoading,
}: ScheduleListProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3",
        className,
      )}
    >
      {isSchedulesLoading
        ? [...Array<undefined>(6)].map((_, i) => (
            <ScheduleCardSkeleton key={i} />
          ))
        : renderElements({
            of: schedules,
            keyExtractor: (schedule) => schedule.id,
            render: (schedule) => <ScheduleCard schedule={schedule} />,
          })}
    </div>
  );
};
