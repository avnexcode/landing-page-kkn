import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { api } from "@/utils";
import { motion } from "framer-motion";
import { DownloadList } from "../components";
import { HiddenComponent } from "@/components/fragments";
import { useState } from "react";

export const DocumentationPage = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const { data: documentations, isLoading: isDocumentationsLoading } =
    api.documentation.getAll.useQuery(undefined, { enabled: !!isEnabled });

  return (
    <PageContainer withHeader withFooter title="Documentation">
      <SectionContainer container className="mb-10 pt-20 xl:mb-20 xl:pt-32">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading className="mb-20 text-center">Documentation</Heading>
        </motion.div>

        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <HiddenComponent
            setIsEnabled={setIsEnabled}
            label="Masukkan password untuk mengakses link download."
            password="@KKend_12_UNISBA#KRISNArawr"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <DownloadList
                documentations={documentations}
                isDocumentationsLoading={isDocumentationsLoading}
              />
            </motion.div>
          </HiddenComponent>
        </motion.main>
      </SectionContainer>
    </PageContainer>
  );
};
