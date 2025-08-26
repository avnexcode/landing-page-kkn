import { GalleryService } from "@/server/features/gallery";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { errorFilter } from "@/server/filters";

export const galleryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    try {
      const gallery = await GalleryService.getAll();
      return gallery;
    } catch (error) {
      return errorFilter(error);
    }
  }),
});
