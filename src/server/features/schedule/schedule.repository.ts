import type { Schedule } from "@/server/interfaces";
import scheduleData from "../../data/schedules.json";

export class ScheduleRepository {
  static findAll = async (): Promise<Schedule[]> => {
    const schedules = scheduleData as Schedule[];
    return schedules;
  };
}
