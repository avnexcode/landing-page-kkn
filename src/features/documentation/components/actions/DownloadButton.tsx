import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, ExternalLink } from "lucide-react";

type DownloadButtonProps = {
  className?: string;
  formattedSize: string;
  cloudName: string;
  fileUrl: string;
};

export const DownloadButton = ({
  className,
  formattedSize,
  cloudName,
  fileUrl,
}: DownloadButtonProps) => {
  const handleDownloadFile = () => {
    window.open(fileUrl, "_blank");
  };
  return (
    <Button
      onClick={handleDownloadFile}
      variant="ghost"
      className={cn(
        "bg-muted/20 hover:bg-muted/40 border-border/30 hover:border-border/60 flex w-full cursor-pointer items-center justify-between rounded-md border p-3 transition-colors",
        "h-auto",
        "px-3 py-3",
        className,
      )}
    >
      <div className="flex items-center space-x-3">
        <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
          <Download className="text-primary h-5 w-5" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-foreground text-sm leading-none font-medium">
            Download File
          </p>
          <p className="text-muted-foreground mt-1 text-xs font-semibold">
            Via {cloudName} • {formattedSize}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-muted-foreground group-hover/download:text-foreground transition-colors">
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>
    </Button>
  );
};
