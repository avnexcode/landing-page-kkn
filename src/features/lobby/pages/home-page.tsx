import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { api } from "@/utils/api";

export const HomePage = () => {
  const hello = api.post.hello.useQuery({ text: "Hello World" });
  return (
    <PageContainer withHeader withFooter>
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <Heading className="text-center">{hello.data?.greeting}</Heading>
      </SectionContainer>
    </PageContainer>
  );
};
