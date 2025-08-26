import { PageContainer, SectionContainer } from "@/components/layouts";
// import { BlogSection } from "@/features/blog/sections";
// import { TeamSection } from "@/features/team/sections";
import {
  AboutSection,
  HeroSection,
  PhilosophySection,
  RuleSection,
  VMSection,
} from "../sections";
export const HomePage = () => {
  return (
    <PageContainer withHeader withFooter>
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <HeroSection sectionId="home-section" className="mb-20" />
        <AboutSection sectionId="about-section" className="mb-20" />
        {/* <TeamSection sectionId="team" className="mb-20" />
        <BlogSection sectionId="blog" className="mb-20" /> */}
        <PhilosophySection sectionId="philosophy-section" className="mb-20" />
        <VMSection sectionId="vm-section" className="mb-20" />
        <RuleSection sectionId="rule-section" />
      </SectionContainer>
    </PageContainer>
  );
};
