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
  getFileTypeDescription,
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
  const isHero = documentation.type === "hero";
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
              "text-foreground group-hover:text-primary line-clamp-1 font-semibold capitalize transition-colors",
              isHero ? "text-xl" : "text-lg",
            )}
          >
            {documentation.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant={"secondary"} className="uppercase">
              {documentation.file_type}
            </Badge>
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
              <Icon
                name={fileTypeIcon.icon as keyof typeof icons}
                className={fileTypeIcon.className}
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent
        className={cn("relative space-y-3", isHero ? "px-6" : "px-4")}
      >
        <div className="space-y-1">
          <div className="bg-muted/20 border-border/20 flex items-center justify-between rounded-lg border p-3">
            <span className="text-muted-foreground flex items-center gap-2 text-sm">
              <Download className="h-3 w-3" />
              Ukuran File:
            </span>
            <span className={cn("text-sm font-bold", sizeColor)}>
              {formattedSize}
            </span>
          </div>

          {documentation.password && (
            <div className="bg-muted/30 border-border/20 rounded-lg border p-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-1 text-sm">
                  <Lock className="h-3 w-3" />
                  Password:
                </span>
                <div className="flex items-center">
                  <span className="text-foreground bg-background/80 rounded border px-2 py-1 font-mono text-xs font-medium">
                    {/* {documentation.password} */}
                    ****************
                  </span>
                  <PasswordCopyButton password={documentation.password} />
                </div>
              </div>
            </div>
          )}
        </div>

        {isHero && (
          <div className="space-y-3 pt-2">
            {/* File Type Description */}
            <div className="from-muted/30 to-muted/10 border-border/30 rounded-md border bg-gradient-to-r p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <Icon
                    name={fileTypeIcon.icon as keyof typeof icons}
                    className={fileTypeIcon.className}
                  />
                </div>
                <div>
                  <p className="text-foreground mb-1 text-sm font-medium">
                    {documentation.file_type.toUpperCase()} Archive
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {getFileTypeDescription(documentation.file_type)}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Info */}
            <div className="from-primary/5 border-border/20 rounded-md border bg-gradient-to-r to-transparent p-3">
              <div className="mb-2 flex items-center gap-2">
                <div className="bg-primary h-2 w-2 animate-pulse rounded-full"></div>
                <span className="text-foreground text-sm font-medium">
                  Download Information
                </span>
              </div>
              <p className="text-muted-foreground pl-4 text-xs leading-relaxed">
                File akan diunduh dari {cloudName} dalam format{" "}
                {documentation.file_type.toUpperCase()}.
                {documentation.password
                  ? " Gunakan password yang disediakan untuk ekstraksi file."
                  : " File tidak memerlukan password."}
              </p>
            </div>
          </div>
        )}
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
