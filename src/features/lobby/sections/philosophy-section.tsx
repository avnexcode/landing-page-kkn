import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import Image from "next/image";

type PhilosophySectionProps = {
  sectionId: string;
  className?: string;
};

export const PhilosophySection = ({
  sectionId,
  className,
}: PhilosophySectionProps) => {
  return (
    <section id={sectionId} className={cn("py-12", className)}>
      <Heading size={"h3"} className="text-center uppercase">
        Filosofi Logo
      </Heading>

      <main className="grid grid-cols-1 gap-5 pt-10 xl:grid-cols-2">
        <div className="mb-8 flex w-full items-center justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
            <Image
              src="https://res.cloudinary.com/dxwmdooxc/image/upload/v1751990804/logo-kkn_ctqytx.png"
              alt="logo-kkn-12"
              width={300}
              height={300}
              className="h-auto w-full rounded-full border"
            />
          </div>
        </div>

        <div className="space-y-6 leading-relaxed text-zinc-700 dark:text-zinc-300">
          <div className="rounded-lg border-l-4 border-blue-500 bg-zinc-50 p-4 dark:bg-blue-950">
            <p className="text-justify">
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                Lingkaran Utama :
              </span>
              <span className="ml-2">
                Melambangkan kesatuan, kontinuitas, dan komitmen berkelanjutan
                kelompok KKN terhadap pengabdian masyarakat. Bentuk melingkar
                menyiratkan semangat kolaboratif tanpa ujung, di mana setiap
                individu saling mendukung dalam harmoni.
              </span>
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-green-500 bg-zinc-50 p-4 dark:bg-green-950">
            <p className="text-justify">
              <span className="font-semibold text-green-700 dark:text-green-400">
                Simbol Tangan Berjabat Mewakili :
              </span>
              <span className="ml-2">
                Kerja sama erat antara mahasiswa KKN dan masyarakat Kelurahan
                Plosokerep. Kepedulian dan solidaritas, menunjukkan bahwa
                kegiatan bukan sekadar tugas akademik, tetapi juga bentuk kasih
                sayang dan kepedulian sosial. Integritas dan komitmen,
                menegaskan bahwa setiap aksi membawa tanggung jawab moral.
              </span>
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-purple-500 bg-zinc-50 p-4 dark:bg-purple-950">
            <p className="text-justify">
              <span className="font-semibold text-purple-700 dark:text-purple-400">
                Ornamen atau Pola Dekoratif di Lingkaran :
              </span>
              <span className="ml-2">
                Menunjukkan kekayaan budaya lokal Plosokerep yang dijunjung
                tinggi selama pelaksanaan KKN. Memberi sentuhan estetika yang
                menunjukkan nilai-nilai spiritual dan etis, selaras dengan
                semangat UNISBA sebagai institusi yang menjunjung nilai-nilai
                islami.
              </span>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};
