import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { renderElements } from "@/utils";
import { motion } from "framer-motion";

type VMSectionProps = {
  sectionId: string;
  className?: string;
};

export const VMSection = ({ sectionId, className }: VMSectionProps) => {
  const vms = [
    {
      index: "1a",
      color: "green",
      text: "Melaksanakan kegiatan pengabdian masyarakat yang berfokus pada peningkatan kualitas hidup masyarakat Plosokerep.",
    },
    {
      index: "2b",
      color: "purple",
      text: "Membangun sinergi antara mahasiswa, masyarakat, dan pemerintah daerah dalam mengembangkan potensi lokal.",
    },
    {
      index: "3c",
      text: "Mengimplementasikan nilai-nilai akademik dan spiritual dalam setiap kegiatan pelayanan masyarakat.",
    },
  ];

  const colorVariants: Record<string, string> = {
    green: "border-green-500 bg-green-50 dark:bg-green-950",
    purple: "border-purple-500 bg-purple-50 dark:bg-purple-950",
    blue: "border-blue-500 bg-blue-50 dark:bg-blue-950",
    default: "border-zinc-400 bg-zinc-50 dark:bg-zinc-900",
  };

  return (
    <section id={sectionId} className={cn("py-12", className)}>
      {/* Judul */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Heading size="h3" className="text-center uppercase">
          Visi & Misi
        </Heading>
      </motion.div>

      <main className="pt-10">
        <div className="prose max-w-none text-zinc-700 dark:text-zinc-300">
          {/* Visi */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h5 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Visi
            </h5>
            <p className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-justify leading-relaxed text-zinc-700 dark:bg-blue-950 dark:text-zinc-200">
              Menjadi program KKN yang memberikan kontribusi nyata dalam
              pemberdayaan masyarakat Kelurahan Plosokerep melalui pendekatan
              yang berkelanjutan dan berbasis nilai-nilai islami.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Misi
            </h5>
            <div className="space-y-3">
              {renderElements({
                of: vms,
                keyExtractor: (vm) => vm.index,
                render: (vm, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "rounded-lg border-l-4 p-4",
                      vm.color
                        ? colorVariants[vm.color]
                        : colorVariants.default,
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: i * 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <p className="text-primary text-justify leading-relaxed">
                      {vm.text}
                    </p>
                  </motion.div>
                ),
              })}
            </div>
          </motion.div>

          {/* Komitmen */}
          <motion.div
            className="bg-background rounded-lg border border-zinc-200 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Komitmen Kami
            </h5>
            <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200">
              Dengan semangat pengabdian dan dedikasi tinggi, kami berkomitmen
              untuk menciptakan dampak positif yang berkelanjutan bagi
              masyarakat Kelurahan Plosokerep. Setiap program yang kami jalankan
              dilandasi oleh nilai-nilai integritas, profesionalisme, dan
              kepedulian sosial yang mendalam.
            </p>
          </motion.div>
        </div>
      </main>
    </section>
  );
};
