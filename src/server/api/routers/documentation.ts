import { errorFilter } from "@/server/filters";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { DocumentationService } from "@/server/features/documentation";

export const documentationRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    try {
      const documentations = await DocumentationService.getAll();
      return documentations;
    } catch (error) {
      return errorFilter(error);
    }
  }),
});
