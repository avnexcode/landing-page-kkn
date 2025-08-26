import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { renderElements } from "@/utils";

type PhilosophySectionProps = {
  sectionId: string;
  className?: string;
};

export const PhilosophySection = ({
  sectionId,
  className,
}: PhilosophySectionProps) => {
  const philosophies = [
    {
      color: "blue",
      title: "Lingkaran Utama :",
      content:
        "Melambangkan kesatuan, kontinuitas, dan komitmen berkelanjutan kelompok KKN terhadap pengabdian masyarakat. Bentuk melingkar menyiratkan semangat kolaboratif tanpa ujung, di mana setiap individu saling mendukung dalam harmoni.",
    },
    {
      color: "green",
      title: "Simbol Tangan Berjabat Mewakili :",
      content:
        "Kerja sama erat antara mahasiswa KKN dan masyarakat Kelurahan Plosokerep. Kepedulian dan solidaritas, menunjukkan bahwa kegiatan bukan sekadar tugas akademik, tetapi juga bentuk kasih sayang dan kepedulian sosial. Integritas dan komitmen, menegaskan bahwa setiap aksi membawa tanggung jawab moral.",
    },
    {
      color: "purple",
      title: "Ornamen atau Pola Dekoratif di Lingkaran :",
      content:
        "Menunjukkan kekayaan budaya lokal Plosokerep yang dijunjung tinggi selama pelaksanaan KKN. Memberi sentuhan estetika yang menunjukkan nilai-nilai spiritual dan etis, selaras dengan semangat UNISBA sebagai institusi yang menjunjung nilai-nilai islami.",
    },
  ];

  const colorVariants: Record<string, string> = {
    blue: "border-blue-500 bg-zinc-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400",
    green:
      "border-green-500 bg-zinc-50 dark:bg-green-950 text-green-700 dark:text-green-400",
    purple:
      "border-purple-500 bg-zinc-50 dark:bg-purple-950 text-purple-700 dark:text-purple-400",
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
        <Heading size={"h3"} className="text-center uppercase">
          Filosofi Logo
        </Heading>
      </motion.div>

      <main className="grid grid-cols-1 gap-5 pt-10 xl:grid-cols-2">
        {/* Logo */}
        <motion.div
          className="mb-8 flex w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
            <Image
              src="https://res.cloudinary.com/dxwmdooxc/image/upload/v1751990804/logo-kkn_ctqytx.png"
              alt="logo-kkn-12"
              width={300}
              height={300}
              className="h-auto w-full rounded-full border"
            />
          </div>
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          className="space-y-6 leading-relaxed text-zinc-700 dark:text-zinc-300"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {renderElements({
            of: philosophies,
            keyExtractor: (philosophy) => philosophy.title,
            render: (philosophy, i) => (
              <motion.div
                key={i}
                className={cn(
                  "rounded-lg border-l-4 p-4",
                  colorVariants[philosophy.color],
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
                <p className="text-justify">
                  <span className="font-semibold">{philosophy.title}</span>
                  <span className="ml-2">{philosophy.content}</span>
                </p>
              </motion.div>
            ),
          })}
        </motion.div>
      </main>
    </section>
  );
};
