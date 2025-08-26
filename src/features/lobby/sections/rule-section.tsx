import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { RuleList } from "../components";
import { motion } from "framer-motion";

type RuleSectionProps = {
  sectionId: string;
  className?: string;
};

export const RuleSection = ({ sectionId, className }: RuleSectionProps) => {
  return (
    <section id={sectionId} className={cn("", className)}>
      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading size={"h3"} className="text-center uppercase">
          Peraturan & Ketentuan
        </Heading>
      </motion.div>

      {/* Isi */}
      <motion.main
        className="pt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <RuleList />
      </motion.main>
    </section>
  );
};
