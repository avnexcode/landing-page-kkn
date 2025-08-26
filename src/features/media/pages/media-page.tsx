import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { VideoSection } from "../sections";
import { motion } from "framer-motion";
export const MediaPage = () => {
  return (
    <PageContainer withHeader withFooter title="Media">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading className="mb-20 text-center">Media</Heading>
        </motion.div>

        <VideoSection sectionId="video-section" className="mb-20" />
      </SectionContainer>
    </PageContainer>
  );
};
