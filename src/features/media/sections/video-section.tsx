import { VideoFrame } from "@/components/fragments";
import { cn } from "@/lib/utils";

type VideoSectionProps = {
  sectionId: string;
  className?: string;
};

export const VideoSection = ({ sectionId, className }: VideoSectionProps) => {
  return (
    <section id={sectionId} className={cn("", className)}>
      <main className="w-full pt-10">
        <VideoFrame
          src="https://www.youtube.com/embed/bDI80PyA9E8?si=ivfqtGQvEcT2aioT"
          title="KULO SINTEN? | AFTER MOVIE KKN 12 UNISBA BLITAR 2025 PLOSOKEREP"
          className="mx-auto"
        />
      </main>
    </section>
  );
};
