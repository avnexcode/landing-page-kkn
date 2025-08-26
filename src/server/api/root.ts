import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { galleryRouter, scheduleRouter, studentRouter } from "./routers";

export const appRouter = createTRPCRouter({
  student: studentRouter,
  schedule: scheduleRouter,
  gallery: galleryRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
