import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { studentRouter } from "./routers";
import { postRouter } from "./routers/post";

export const appRouter = createTRPCRouter({
  post: postRouter,
  student: studentRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
