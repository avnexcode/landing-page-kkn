import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type GalleryCardSkeletonProps = {
  className?: string;
  orientation?: "portrait" | "landscape";
};

export const GalleryCardSkeleton: React.FC<GalleryCardSkeletonProps> = ({
  className = "",
  orientation = "landscape",
}) => {
  return (
    <Card className={cn("border-border/50", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          {/* Title Skeleton */}
          <Skeleton className="bg-muted h-6 w-32" />
          {/* Badge Skeleton */}
          <Skeleton className="bg-muted h-5 w-20 rounded-full" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Image Skeleton */}
        <div className="relative overflow-hidden rounded-md">
          <Skeleton
            className={cn(
              "bg-muted w-full",
              orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
            )}
          />
        </div>

        {/* Download Section Skeleton */}
        <div className="bg-muted/20 border-border/30 flex items-center justify-between rounded-md border p-3">
          <div className="flex items-center space-x-3">
            {/* Icon Circle Skeleton */}
            <Skeleton className="bg-muted h-8 w-8 rounded-full" />
            <div className="space-y-1">
              {/* Download Text Skeleton */}
              <Skeleton className="bg-muted h-4 w-16" />
              {/* Subtitle Skeleton */}
              <Skeleton className="bg-muted h-3 w-24" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
