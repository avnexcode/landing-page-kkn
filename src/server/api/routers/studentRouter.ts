import { createTRPCRouter, publicProcedure } from "../trpc";

import z from "zod";
import { studentQueryParams } from "@/server/validations";
import { StudentService } from "@/server/features/student";
import { errorFilter } from "@/server/filters";

export const studentRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        params: studentQueryParams,
      }),
    )
    .query(async ({ input: { params } }) => {
      try {
        const students = await StudentService.getAll(params);
        return students;
      } catch (error) {
        return errorFilter(error);
      }
    }),
});
