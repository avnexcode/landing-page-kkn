import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type VMSectionProps = {
  sectionId: string;
  className?: string;
};

export const VMSection = ({ sectionId, className }: VMSectionProps) => {
  return (
    <section id={sectionId} className={cn("py-12", className)}>
      <Heading size="h3" className="text-center uppercase">
        Visi & Misi
      </Heading>

      <main className="pt-10">
        <div className="prose max-w-none text-zinc-700 dark:text-zinc-300">
          <div className="mb-6">
            <h5 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Visi
            </h5>
            <p className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-justify leading-relaxed text-zinc-700 dark:bg-blue-950 dark:text-zinc-200">
              Menjadi program KKN yang memberikan kontribusi nyata dalam
              pemberdayaan masyarakat Kelurahan Plosokerep melalui pendekatan
              yang berkelanjutan dan berbasis nilai-nilai islami.
            </p>
          </div>

          <div className="mb-6">
            <h5 className="mb-3 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
              Misi
            </h5>
            <div className="space-y-3">
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-950">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200">
                  Melaksanakan kegiatan pengabdian masyarakat yang berfokus pada
                  peningkatan kualitas hidup masyarakat Plosokerep.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-950">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200">
                  Membangun sinergi antara mahasiswa, masyarakat, dan pemerintah
                  daerah dalam mengembangkan potensi lokal.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950">
                <p className="text-justify leading-relaxed text-zinc-700 dark:text-zinc-200">
                  Mengimplementasikan nilai-nilai akademik dan spiritual dalam
                  setiap kegiatan pelayanan masyarakat.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900">
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
          </div>
        </div>
      </main>
    </section>
  );
};
