import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";
import type { icons } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading size={"h3"} className="text-center uppercase">
          Tentang Kami
        </Heading>
      </motion.div>

      <main className="grid gap-5 pt-10 xl:grid-cols-2">
        <motion.div
          className="space-y-4 xl:space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {renderElements({
            of: details,
            keyExtractor: (detail) => detail.label,
            render: (detail, index) => (
              <motion.div
                key={detail.label}
                className="group border-border bg-muted/50 hover:border-border/80 hover:bg-muted/80 hover:shadow-primary/5 relative rounded-xl border p-2 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
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
                <div className="via-primary/10 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              </motion.div>
            ),
          })}
        </motion.div>

        <motion.div
          className="text-foreground space-y-5 text-justify"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            Kelompok Kuliah Kerja Nyata (KKN) 12 Plosokerep terdiri atas 34
            mahasiswa Universitas Islam Balitar yang berasal dari berbagai
            program studi. Keberagaman latar belakang keilmuan tersebut menjadi
            potensi sekaligus kekuatan utama bagi kelompok kami dalam
            melaksanakan program kerja serta kegiatan pengabdian kepada
            masyarakat.
          </p>
          <p>
            Kehadiran kami di Kelurahan Plosokerep dilandasi semangat untuk
            belajar, berbagi, serta memberikan kontribusi nyata kepada
            masyarakat. Seluruh program yang dilaksanakan merupakan hasil
            kolaborasi ide, kreativitas, dan kepedulian bersama, sehingga
            diharapkan mampu memberikan manfaat baik bagi warga maupun bagi
            mahasiswa yang terlibat.
          </p>
          <p>
            Kegiatan KKN bukan hanya sebatas kewajiban akademik, melainkan juga
            merupakan wadah pembelajaran kehidupan. Melalui kegiatan ini, kami
            memperoleh pengalaman berharga mengenai arti kebersamaan, nilai
            gotong royong, serta kedekatan dengan masyarakat. Dengan mengusung
            semboyan <em>“Bersatu, Berkarya, Bermanfaat”</em>, kelompok kami
            meyakini bahwa pengalaman selama pelaksanaan KKN akan menjadi bekal
            penting dalam menghadapi tantangan di masa yang akan datang.
          </p>
        </motion.div>
      </main>
    </section>
  );
};
