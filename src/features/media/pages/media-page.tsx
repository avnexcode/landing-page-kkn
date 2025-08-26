import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { VideoSection } from "../sections";

export const MediaPage = () => {
  return (
    <PageContainer withHeader withFooter title="Media">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <Heading className="mb-20 text-center">Media</Heading>

        <VideoSection sectionId="video-section" className="mb-20" />
      </SectionContainer>
    </PageContainer>
  );
};
