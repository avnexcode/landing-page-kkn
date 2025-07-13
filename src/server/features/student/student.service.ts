import type { StudentQueryParams } from "@/server/types";
import { StudentRepository } from "./student.repository";

export class StudentService {
  static getAll = async (params: StudentQueryParams) => {
    const students = await StudentRepository.findAll(params);
    return students;
  };
}
