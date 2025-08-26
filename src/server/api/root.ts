import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import {
  documentationRouter,
  galleryRouter,
  scheduleRouter,
  studentRouter,
} from "./routers";

export const appRouter = createTRPCRouter({
  student: studentRouter,
  schedule: scheduleRouter,
  gallery: galleryRouter,
  documentation: documentationRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
