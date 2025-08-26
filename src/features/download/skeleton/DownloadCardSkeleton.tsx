import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type DownloadCardSkeletonProps = {
  className?: string;
  isHero?: boolean;
};

export const DownloadCardSkeleton = ({
  className,
  isHero,
}: DownloadCardSkeletonProps) => {
  return (
    <Card
      className={cn(
        "border-border/50 relative w-full overflow-hidden",
        "transition-all duration-300",
        className,
      )}
    >
      {isHero && (
        <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent" />
      )}

      <CardHeader className={cn(isHero ? "pb-4" : "pb-3", "relative")}>
        <div className="flex items-center justify-between">
          <Skeleton className={cn("h-5 w-40", isHero && "h-6 w-48")} />
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-12 rounded" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </CardHeader>

      <CardContent
        className={cn("relative space-y-3", isHero ? "px-6" : "px-4")}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>

          <div className="rounded-lg border p-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-32 rounded" />
            </div>
          </div>
        </div>

        {isHero && (
          <div className="space-y-3 pt-2">
            <div className="rounded-md border p-4">
              <div className="flex items-start gap-3">
                <Skeleton className="h-6 w-6 rounded" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </div>
            </div>

            <div className="rounded-md border p-3">
              <Skeleton className="mb-2 h-4 w-32" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className={cn(isHero ? "px-6 pt-4" : "px-4", "relative")}>
        <Skeleton className="h-12 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
};
