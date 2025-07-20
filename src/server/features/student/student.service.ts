import type { StudentQueryParams } from "@/server/types";
import { StudentRepository } from "./student.repository";
import type { PaginatedResponse, Student } from "@/server/interfaces";

export class StudentService {
  static getAll = async (
    params: StudentQueryParams,
  ): Promise<PaginatedResponse<Student>> => {
    const students = await StudentRepository.findAll(params);

    return students;
  };

  static getManyByIDs = async (ids: string[]): Promise<Student[]> => {
    const students = await StudentRepository.findManyByIDs(ids);

    return students;
  };
}
