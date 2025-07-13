import type { StudentQueryParams } from "@/server/types";
import studentData from "../../data/student.json";
import type { Student } from "@/server/interfaces";

export class StudentRepository {
  static findAll = async (params: StudentQueryParams) => {
    const { search, limit = 10, page = 1, division, program } = params;

    let filteredData = studentData as Student[];

    if (division) {
      filteredData = filteredData.filter(
        (student) => student.division.tag === division,
      );
    }

    if (program) {
      filteredData = filteredData.filter(
        (student) => student.program.tag === program,
      );
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      filteredData = filteredData.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm) ??
          student.division.name?.toLowerCase().includes(searchTerm) ??
          student.program.name?.toLowerCase().includes(searchTerm),
      );
    }

    const totalCount = filteredData.length;
    const lastPage = Math.ceil(totalCount / limit);
    const offset = (page - 1) * limit;
    const paginatedData = filteredData.slice(offset, offset + limit);

    return {
      data: paginatedData,
      meta: {
        total: totalCount,
        limit,
        page,
        last_page: lastPage,
      },
    };
  };
}
