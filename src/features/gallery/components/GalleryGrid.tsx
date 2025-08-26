import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";
import { GalleryCardSkeleton } from "../skeleton";
import type { Gallery } from "../types";
import { GalleryCard } from "./GalleryCard";

type GalleryGridProps = {
  galleryItems?: Gallery[];
  isGalleryLoading?: boolean;
  onViewImage: (item: Gallery) => void;
  onDownloadImage: (item: Gallery) => Promise<void>;
  className?: string;
};

export const GalleryGrid = ({
  galleryItems,
  isGalleryLoading,
  onViewImage,
  onDownloadImage,
  className,
}: GalleryGridProps) => {
  const galleryCardLoading = () => {
    if (isGalleryLoading) {
      return [...Array<undefined>(6)].map((_, i) => {
        const isPortrait = i % 5 === 0;
        return (
          <div
            key={i}
            className={cn(
              isPortrait
                ? "col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3"
                : "col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-3",
            )}
          >
            <GalleryCardSkeleton
              orientation={isPortrait ? "portrait" : "landscape"}
            />
          </div>
        );
      });
    }
  };

  return (
    <div
      className={cn(
        "grid auto-rows-max gap-4",
        "items-center",
        "grid-cols-1 lg:grid-cols-6 xl:grid-cols-9",
        className,
      )}
    >
      {galleryCardLoading()}
      {renderElements({
        of: galleryItems,
        keyExtractor: (galleryItem) => galleryItem.id,
        render: (galleryItem) => (
          <div
            key={galleryItem.id}
            className={cn(
              galleryItem.orientation === "portrait"
                ? "col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-3"
                : "col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-3",
            )}
          >
            <GalleryCard
              gallery={galleryItem}
              onViewImage={onViewImage}
              onDownloadImage={onDownloadImage}
              // className="max-h-[600px]"
            />
          </div>
        ),
      })}
    </div>
  );
};
