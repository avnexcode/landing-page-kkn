import { VideoFrame } from "@/components/fragments";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type VideoSectionProps = {
  sectionId: string;
  className?: string;
};

export const VideoSection = ({ sectionId, className }: VideoSectionProps) => {
  return (
    <section id={sectionId} className={cn("", className)}>
      <main className="w-full pt-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-5xl"
        >
          <VideoFrame
            src="https://www.youtube.com/embed/bDI80PyA9E8?si=ivfqtGQvEcT2aioT"
            title="KULO SINTEN? | AFTER MOVIE KKN 12 UNISBA BLITAR 2025 PLOSOKEREP"
            className="aspect-video w-full rounded-2xl shadow-lg"
          />
        </motion.div>
      </main>
    </section>
  );
};
