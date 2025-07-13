import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { RuleList } from "../components";

type RuleSectionProps = {
  sectionId: string;
  className?: string;
};

export const RuleSection = ({ sectionId, className }: RuleSectionProps) => {
  return (
    <section id={sectionId} className={cn("", className)}>
      <Heading size={"h3"} className="text-center uppercase">
        Peraturan & Ketentuan
      </Heading>
      <main className="pt-10">
        <RuleList />
      </main>
    </section>
  );
};
