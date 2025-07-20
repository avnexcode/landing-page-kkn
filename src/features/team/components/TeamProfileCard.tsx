import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Target, User } from "lucide-react";
import type { Student } from "../types";
import Image from "next/image";

type TeamProfileCardProps = {
  student: Student;
};

export const TeamProfileCard = (props: TeamProfileCardProps) => {
  return (
    <div className="mx-auto max-w-sm min-w-full">
      <Card className="group border-border bg-background hover:border-border/80 h-full transition-all duration-300 hover:shadow-lg">
        <CardHeader className="pb-4">
          <div className="relative">
            <div className="relative mx-auto mb-4 h-60 w-60">
              <Image
                src={props.student.image}
                alt={`${props.student.name} - KKN Team`}
                className="border-muted h-full w-full rounded-full border-4 object-cover shadow-md transition-shadow duration-300 group-hover:shadow-lg"
                width={2000}
                height={2000}
              />
              <div className="from-foreground/20 absolute inset-0 rounded-full bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            <div className="text-center capitalize">
              <h3 className="text-foreground mb-1 text-lg font-semibold">
                {props.student.name}
              </h3>
              <Badge
                variant="secondary"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 uppercase"
              >
                {props.student.division.position ??
                  props.student.division.position}{" "}
                {props.student.division.name}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <User className="text-muted-foreground/70 h-4 w-4" />
            <span className="capitalize">{props.student.major}</span>
          </div>

          <div className="text-muted-foreground flex items-start gap-2 text-sm">
            <Target className="text-muted-foreground/70 mt-0.5 h-4 w-4 flex-shrink-0" />
            <span className="leading-relaxed capitalize">
              {props.student.program.name}{" "}
              <span className="uppercase">({props.student.program.alias})</span>
            </span>
          </div>

          <div className="border-border border-t pt-2">
            <a
              href={props.student.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              <span className="underline-offset-2 hover:underline">
                Follow Instagram
              </span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
