import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";
import type { Documentation } from "../types";
import { DownloadCard } from "./DownloadCard";
import { DownloadCardSkeleton } from "../skeleton/DownloadCardSkeleton";
import { motion, type Variants } from "framer-motion";
import { Heading } from "@/components/ui/heading";

type DownloadListProps = {
  className?: string;
  documentations?: Documentation[];
  isDocumentationsLoading: boolean;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const DownloadList = ({
  className,
  documentations,
  isDocumentationsLoading,
}: DownloadListProps) => {
  const getDocumentationData = (type: Documentation["type"]) => {
    if (type === "job") {
      return documentations?.filter(
        (documentation) => documentation.type === "job",
      );
    }
    if (type === "general") {
      return documentations?.filter(
        (documentation) => documentation.type === "general",
      );
    }
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn(className)}
    >
      <div className="flex w-full flex-col items-center justify-center gap-y-5">
        <Heading>Proker</Heading>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {isDocumentationsLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <DownloadCardSkeleton key={i} isHero={false} />
              ))
            : renderElements({
                of: getDocumentationData("job"),
                keyExtractor: (documentation) => documentation.id,
                render: (documentation) => {
                  return (
                    <motion.div
                      key={documentation.id}
                      variants={itemVariants}
                      className={"lg:col-span-2 xl:col-span-3"}
                    >
                      <DownloadCard documentation={documentation} />
                    </motion.div>
                  );
                },
              })}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-y-5 pt-10">
        <Heading>Umum</Heading>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {isDocumentationsLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <DownloadCardSkeleton key={i} isHero={false} />
              ))
            : renderElements({
                of: getDocumentationData("general"),
                keyExtractor: (documentation) => documentation.id,
                render: (documentation) => {
                  return (
                    <motion.div
                      key={documentation.id}
                      variants={itemVariants}
                      className={""}
                    >
                      <DownloadCard documentation={documentation} />
                    </motion.div>
                  );
                },
              })}
        </div>
      </div>
    </motion.div>
  );
};
