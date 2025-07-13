import type z from "zod";
import type { studentQueryParams } from "../validations";

export type StudentQueryParams = z.infer<typeof studentQueryParams>;
