import { ScheduleService } from "@/server/features/schedule";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { errorFilter } from "@/server/filters";

export const scheduleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    try {
      const schedules = await ScheduleService.getAll();
      return schedules;
    } catch (error) {
      return errorFilter(error);
    }
  }),
});
