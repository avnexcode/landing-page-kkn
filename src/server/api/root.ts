import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { scheduleRouter, studentRouter } from "./routers";

export const appRouter = createTRPCRouter({
  student: studentRouter,
  schedule: scheduleRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
