import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";
import type { icons } from "lucide-react";
import { useTheme } from "next-themes";

type AboutSectionProps = {
  sectionId: string;
  className?: string;
};

export const AboutSection = ({ sectionId, className }: AboutSectionProps) => {
  const { theme } = useTheme();
  const details = [
    {
      label: "lokasi",
      content:
        "Jl. Kenari No.52, Plosokerep, Kec. Sananwetan, Kota Blitar, Jawa Timur 66134",
      icon: {
        name: "MapPin",
        color: {
          light: "#000",
          dark: "#fff",
        },
        size: 40,
      },
    },
    {
      label: "pelaksanaan",
      content: "Senin, 14 Juli 2025 - Jumat, 15 Agustus 2025",
      icon: {
        name: "CalendarDays",
        color: {
          light: "#000",
          dark: "#fff",
        },
        size: 40,
      },
    },
  ];
  return (
    <section id={sectionId} className={cn("", className)}>
      <Heading size={"h3"} className="text-center uppercase">
        Tentang Kami
      </Heading>
      <main className="grid gap-5 pt-10 xl:grid-cols-2">
        <div className="space-y-4 xl:space-y-6">
          {renderElements({
            of: details,
            keyExtractor: (detail) => detail.label,
            render: (detail) => {
              return (
                <div className="group border-border bg-muted/50 hover:border-border/80 hover:bg-muted/80 hover:shadow-primary/5 relative rounded-xl border p-2 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="border-border from-background to-muted/50 group-hover:from-muted/20 group-hover:to-muted/80 flex-shrink-0 rounded-lg border bg-gradient-to-br p-3 transition-all duration-300">
                      <Icon
                        name={detail.icon.name as keyof typeof icons}
                        color={
                          theme === "dark"
                            ? detail.icon.color.dark
                            : detail.icon.color.light
                        }
                        size={detail.icon.size}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h1 className="text-foreground group-hover:text-foreground/90 mb-2 text-lg font-semibold capitalize transition-colors duration-300 xl:text-xl">
                        {detail.label}
                      </h1>
                      <p className="text-muted-foreground group-hover:text-muted-foreground/80 leading-relaxed transition-colors duration-300">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                  {/* Subtle animated border */}
                  <div className="via-primary/10 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </div>
              );
            },
          })}
        </div>
        <div className="text-foreground text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          accusamus, incidunt ipsum non dicta maiores! Dolore beatae incidunt
          enim ipsa aliquid dolores delectus error a aperiam! Eius illo
          quibusdam ut veniam sed quis provident harum distinctio facilis
          temporibus! Minus quis quam quidem excepturi omnis, voluptas, vel,
          nostrum ratione adipisci a nesciunt incidunt iure dolorem accusamus
          itaque possimus aliquam inventore sint. Vitae doloribus quasi natus
          corporis. Voluptatem esse, totam consectetur eos nesciunt mollitia
          dolorum hic nobis excepturi. Corporis nobis accusantium explicabo,
          delectus error, est libero, nesciunt quidem vero eveniet qui
          voluptates officiis aperiam similique ad doloremque natus eum adipisci
          ab officia?
        </div>
      </main>
    </section>
  );
};
