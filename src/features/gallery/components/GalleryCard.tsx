import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Download, Eye } from "lucide-react";
import Image from "next/image";
import type { Gallery } from "../types";

type GalleryCardProps = {
  onViewImage: (item: Gallery) => void;
  onDownloadImage: (item: Gallery) => Promise<void>;
  className?: string;
  gallery: Gallery;
};

export const GalleryCard = ({
  gallery,
  onViewImage,
  onDownloadImage,
  className,
}: GalleryCardProps) => {
  return (
    <Card
      className={cn(
        "group border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground group-hover:text-primary line-clamp-1 text-lg font-semibold transition-colors">
            {gallery.title}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent
        onClick={() => onViewImage(gallery)}
        className="cursor-pointer space-y-3"
      >
        <div className="relative overflow-hidden rounded-md">
          <div
            className={cn(
              "relative",
              gallery.orientation === "portrait"
                ? "aspect-[3/4]"
                : "aspect-[4/3]",
            )}
          >
            <Image
              src={gallery.image}
              alt={gallery.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* View Icon */}
            <div className="absolute top-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Eye className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div
          onClick={() => onDownloadImage(gallery)}
          className="bg-muted/20 hover:bg-muted/40 border-border/30 hover:border-border/60 flex w-full cursor-pointer items-center justify-between rounded-md border p-3 transition-colors"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
              <Download className="text-primary h-4 w-4" />
            </div>
            <div>
              <p className="text-foreground text-sm leading-none font-medium">
                Download
              </p>
              <p className="text-muted-foreground mt-1 text-xs">
                Klik untuk mengunduh
              </p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
