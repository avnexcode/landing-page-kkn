import z from "zod";

export const studentQueryParams = z.object({
  search: z.string().optional(),
  limit: z.number().optional().default(10),
  page: z.number().optional().default(1),
  division: z.string().optional(),
  program: z.string().optional(),
});
