import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { api, renderElements } from "@/utils";
import type { Schedule } from "../types";

type ScheduleCardProps = {
  className?: string;
  schedule: Schedule;
};

export const ScheduleCard = ({ className, schedule }: ScheduleCardProps) => {
  const { data: students, isLoading: studentsLoading } =
    api.student.getManyByIDs.useQuery(
      {
        ids: schedule?.studentsID ?? [],
      },
      {
        enabled: !!schedule?.studentsID && schedule.studentsID.length > 0,
      },
    );

  return (
    <Card
      className={cn(
        "group border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-foreground group-hover:text-primary text-lg font-semibold capitalize transition-colors">
            {schedule.day}
          </CardTitle>
          <Badge
            variant="outline"
            className="bg-muted/50 text-muted-foreground border-muted-foreground/20 text-xs"
          >
            <Calendar className="mr-1 h-3 w-3" />
            Piket
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="text-muted-foreground mb-4 flex items-center text-sm">
          <Users className="mr-2 h-4 w-4" />
          <span>Petugas ({schedule.studentsID?.length || 0} orang)</span>
        </div>

        {studentsLoading ? (
          <div className="space-y-3">
            {[...Array<undefined>(5)].map((_, i) => (
              <div
                key={i}
                className="bg-muted/30 flex items-center space-x-3 rounded-md p-3"
              >
                <Skeleton className="bg-muted h-8 w-8 rounded-full" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="bg-muted h-4 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {renderElements({
              of: students,
              keyExtractor: (student) => student.id,
              render: (student) => (
                <div className="bg-muted/20 hover:bg-muted/40 border-border/30 hover:border-border/60 flex items-center justify-between rounded-md border p-3 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                      <span className="text-primary text-sm font-medium">
                        {student.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-foreground text-sm leading-none font-medium capitalize">
                        {student.name}
                      </p>
                      {(student.division?.name || student.program?.name) && (
                        <p className="text-muted-foreground mt-1 text-xs uppercase">
                          {student.division?.name}
                        </p>
                      )}
                    </div>
                  </div>
                  {student.id === schedule.studentLeadId && (
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      PJ
                    </Badge>
                  )}
                </div>
              ),
            })}
          </div>
        )}

        {!studentsLoading && (!students || students.length === 0) && (
          <div className="py-8 text-center">
            <div className="bg-muted/50 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
              <Users className="text-muted-foreground/50 h-6 w-6" />
            </div>
            <p className="text-muted-foreground text-sm">
              Belum ada petugas yang ditugaskan
            </p>
          </div>
        )}
      </CardContent>

      <CardFooter className="border-border/50 bg-muted/20 border-t pt-4">
        <div className="text-muted-foreground flex w-full items-center justify-between text-xs">
          <span>Jadwal Piket Harian</span>
          {students && students.length > 0 && (
            <span className="bg-primary/10 text-primary rounded-full px-2 py-1">
              {students.length} mahasiswa
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
