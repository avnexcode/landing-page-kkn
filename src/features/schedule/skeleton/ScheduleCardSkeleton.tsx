import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ScheduleCardSkeletonProps = {
  className?: string;
};

export const ScheduleCardSkeleton = ({
  className,
}: ScheduleCardSkeletonProps) => (
  <Card
    className={cn(
      "group border-border/50 transition-all duration-300 hover:shadow-lg",
      className,
    )}
  >
    <CardHeader className="pb-4">
      <div className="flex items-center justify-between">
        <Skeleton className="bg-muted h-6 w-20" />
        <Skeleton className="bg-muted h-5 w-12" />
      </div>
    </CardHeader>

    <CardContent className="space-y-3">
      <div className="mb-4 flex items-center text-sm">
        <Skeleton className="bg-muted mr-2 h-4 w-4" />
        <Skeleton className="bg-muted h-4 w-24" />
      </div>

      <div className="space-y-2">
        {[...Array<undefined>(5)].map((_, i) => (
          <div
            key={i}
            className="bg-muted/20 border-border/30 flex items-center justify-between rounded-md border p-3"
          >
            <div className="flex items-center space-x-3">
              <Skeleton className="bg-muted h-8 w-8 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="bg-muted h-4 w-24" />
                <Skeleton className="bg-muted h-3 w-20" />
              </div>
            </div>
            {i === 0 && <Skeleton className="bg-muted h-5 w-8" />}
          </div>
        ))}
      </div>
    </CardContent>

    <CardFooter className="border-border/50 bg-muted/20 border-t pt-4">
      <div className="flex w-full items-center justify-between">
        <Skeleton className="bg-muted h-3 w-32" />
        <Skeleton className="bg-muted h-5 w-16" />
      </div>
    </CardFooter>
  </Card>
);
