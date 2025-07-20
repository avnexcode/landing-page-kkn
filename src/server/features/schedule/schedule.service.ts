import type { Schedule } from "@/server/interfaces";
import { ScheduleRepository } from "./schedule.repository";

export class ScheduleService {
  static getAll = async (): Promise<Schedule[]> => {
    const schedules = await ScheduleRepository.findAll();

    return schedules;
  };
}
