import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Download, type icons, Lock } from "lucide-react";
import type { Documentation } from "../types";
import {
  formatFileSize,
  getCloudDisplayName,
  getFileTypeIcon,
  getSizeColor,
} from "../utils";
import { DownloadButton, PasswordCopyButton } from "./actions";

type DownloadCardProps = {
  className?: string;
  documentation: Documentation;
};

export const DownloadCard = ({
  className,
  documentation,
}: DownloadCardProps) => {
  const isHero = documentation.type === "job";
  const formattedSize = formatFileSize(documentation.size);
  const sizeColor = getSizeColor(documentation.size);
  const fileTypeIcon = getFileTypeIcon(documentation.file_type);
  const cloudName = getCloudDisplayName(documentation.cloud_name);

  return (
    <Card
      className={cn(
        "group border-border/50 hover:border-border relative w-full overflow-hidden transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      {/* Background Pattern untuk Hero */}
      {isHero && (
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />
      )}

      <CardHeader className={cn(isHero ? "pb-4" : "pb-3", "relative")}>
        <div className="flex items-center justify-between">
          <CardTitle
            className={cn(
              "text-foreground group-hover:text-primary line-clamp-1 flex items-center gap-2 font-semibold capitalize transition-colors",
              isHero ? "text-xl" : "text-lg",
            )}
          >
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
              <Icon
                name={fileTypeIcon.icon as keyof typeof icons}
                className={fileTypeIcon.className}
              />
            </div>{" "}
            <span className="">{documentation.title}</span>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant={"secondary"} className="uppercase">
              {documentation.file_type}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent
        className={cn("relative space-y-3", isHero ? "px-6" : "px-4")}
      >
        <div className="space-y-1">
          <div className="bg-muted/20 border-border/20 flex items-center justify-between rounded-lg border p-3">
            <span className="text-muted-foreground flex items-center gap-2 text-sm">
              <Download className="h-3.5 w-3.5" />
              Ukuran File:
            </span>
            <span className={cn("text-sm font-bold", sizeColor)}>
              {formattedSize}
            </span>
          </div>

          {documentation.password && (
            <div className="bg-muted/30 border-border/20 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Lock className="h-3.5 w-3.5" />
                  Password:
                </span>
                <div className="flex items-center">
                  <span className="text-foreground bg-background/80 rounded border px-2 py-1 font-mono text-xs font-medium">
                    ****************
                  </span>
                  {documentation.password_type === "show" ? (
                    <PasswordCopyButton password={documentation.password} />
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className={cn(isHero ? "px-6 pt-4" : "px-4", "relative")}>
        <DownloadButton
          cloudName={cloudName}
          formattedSize={formattedSize}
          fileUrl={documentation.url}
        />
      </CardFooter>
    </Card>
  );
};
