import type { CloudName } from "@/server/interfaces";

export type Documentation = {
  id: string;
  title: string;
  url: string;
  password?: string;
  file_type: "zip" | "tar" | "7z" | "rar";
  type: "list" | "hero";
  size: {
    total: number;
    type: "kb" | "mb" | "gb" | "tb";
  };
  cloud_name: CloudName;
};
