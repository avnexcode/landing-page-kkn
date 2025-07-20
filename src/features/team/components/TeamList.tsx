import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";
import { CircleChevronRight, Users } from "lucide-react";
import Link from "next/link";
import { TeamProfileCard } from "./TeamProfileCard";
import type { Student } from "../types";

type TeamListProps = {
  className?: string;
  showMoreButton?: boolean;
  students?: Student[];
  meta?: {
    total: number;
    limit: number;
    page: number;
    last_page: number;
  };
  isStudentsLoading?: boolean;
};

export const TeamList = ({
  className,
  showMoreButton = false,
  students,
  isStudentsLoading,
  meta,
}: TeamListProps) => {
  if (isStudentsLoading) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center px-4 py-12",
          className,
        )}
      >
        <div className="bg-muted/50 mb-4 rounded-full p-6">
          <Users size={48} className="text-muted-foreground animate-pulse" />
        </div>
        <p className="text-muted-foreground">Memuat data mahasiswa...</p>
      </div>
    );
  }

  const displayedMembers = students ?? [];
  const {
    total,
    limit: currentLimit,
    page: currentPage,
    last_page,
  } = meta ?? {};
  const hasMorePages = currentPage && last_page && currentPage < last_page;

  if (displayedMembers.length === 0) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center px-4 py-12",
          className,
        )}
      >
        <div className="bg-muted/50 mb-4 rounded-full p-6">
          <Users size={48} className="text-muted-foreground" />
        </div>
        <h3 className="text-foreground mb-2 text-xl font-semibold">
          Tidak Ada Data Mahasiswa
        </h3>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      {renderElements({
        of: displayedMembers,
        keyExtractor: (teamMember) => teamMember.id,
        render: (teamMember) => <TeamProfileCard student={teamMember} />,
      })}

      {showMoreButton && hasMorePages && (
        <Link
          href="/team"
          className="group bg-background border-border hover:bg-muted/60 hover:border-border/80 flex flex-col items-center justify-center gap-2 rounded-xl border p-4 shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <CircleChevronRight
            size={40}
            className="text-primary transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-foreground group-hover:text-primary text-base font-medium transition-colors duration-300">
            Lihat Selengkapnya
          </span>
          {total && currentLimit && (
            <span className="text-muted-foreground text-sm">
              {displayedMembers.length} dari {total} mahasiswa
            </span>
          )}
        </Link>
      )}
    </div>
  );
};
