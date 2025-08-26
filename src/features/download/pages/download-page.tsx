import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { api } from "@/utils";
import { motion } from "framer-motion";
import { DownloadList } from "../components";

export const DownloadPage = () => {
  const { data: documentations, isLoading: isDocumentationsLoading } =
    api.documentation.getAll.useQuery();

  console.log(documentations);

  return (
    <PageContainer withHeader withFooter title="Gallery">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading className="mb-20 text-center">Download</Heading>
        </motion.div>
        <main>
          <DownloadList
            documentations={documentations}
            isDocumentationsLoading={isDocumentationsLoading}
          />
        </main>
      </SectionContainer>
    </PageContainer>
  );
};
