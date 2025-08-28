import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";
import type { Documentation } from "../types";
import { DownloadCard } from "./DownloadCard";
import { DownloadCardSkeleton } from "../skeleton/DownloadCardSkeleton";
import { motion, type Variants } from "framer-motion";

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
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={cn(
        "grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {isDocumentationsLoading
        ? Array.from({ length: 6 }).map((_, i) => (
            <DownloadCardSkeleton key={i} isHero={false} />
          ))
        : renderElements({
            of: documentations,
            keyExtractor: (documentation) => documentation.id,
            render: (documentation) => (
              <motion.div key={documentation.id} variants={itemVariants}>
                <DownloadCard documentation={documentation} className="" />
              </motion.div>
            ),
          })}
    </motion.div>
  );
};
