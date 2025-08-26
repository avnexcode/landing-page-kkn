import { InstagramIcon, TikTokIcon } from "@/components/elements/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { HeroImage } from "../components";

type HeroSectionProps = {
  sectionId: string;
  className?: string;
};

export const HeroSection = ({ sectionId, className }: HeroSectionProps) => {
  const { theme } = useTheme();

  return (
    <section id={sectionId} className={cn("w-full", className)}>
      <div className="mx-auto grid place-items-center gap-8 lg:max-w-screen-xl">
        <motion.div
          className="space-y-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="outline" className="py-2 text-sm">
              <span className="text-primary">
                <Badge>KKN 2025</Badge>
              </span>
              <span> Program Pemberdayaan Masyarakat </span>
            </Badge>
          </motion.div>

          <motion.div
            className="mx-auto max-w-screen-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Heading className="text-center uppercase">
              Kuliah Kerja Nyata
              <span className="to-primary bg-gradient-to-r from-[#D247BF] bg-clip-text px-2 text-center text-transparent">
                UNISBA
              </span>
              2025
            </Heading>
          </motion.div>

          <motion.div
            className="mx-auto max-w-screen-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Heading size={"h2"} className="text-foreground mb-4 text-center">
              Pemberdayaan Produk UMKM Berbasis Kearifan Lokal
            </Heading>
            <Heading size={"h3"} className="text-muted-foreground text-center">
              Melalui Koperasi Merah Putih Menuju Masyarakat Kelurahan
              Plosokerep, Kecamatan Sananwetan, Kota Blitar Mandiri dan
              Sejahtera
            </Heading>
          </motion.div>

          <motion.p
            className="text-muted-foreground mx-auto max-w-screen-sm text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Bersama membangun ekonomi kerakyatan yang berkelanjutan melalui
            pemberdayaan UMKM lokal dan penguatan koperasi sebagai pilar
            perekonomian masyarakat.
          </motion.p>

          <motion.div
            className="space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <Button asChild className="group/arrow w-5/6 font-bold md:w-1/4">
              <Link
                href={"https://www.instagram.com/kkn_plosokerep2025/"}
                target="_blank"
              >
                <InstagramIcon className="size-6" dark={theme === "dark"} />
                Instagram
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 px-2 font-bold md:w-1/4"
            >
              <Link
                href="https://www.tiktok.com/@kknunisbaplosokerep"
                target="_blank"
              >
                <TikTokIcon className="size-6" dark={theme === "dark"} />
                Tiktok
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          className="group relative mt-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="bg-primary/50 absolute top-2 left-1/2 mx-auto h-24 w-[90%] -translate-x-1/2 transform rounded-full blur-3xl lg:-top-8 lg:h-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.4, duration: 1 }}
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <HeroImage />
          </motion.div>

          <div className="from-background/0 via-background/50 to-background absolute bottom-0 left-0 h-20 w-full bg-gradient-to-b md:h-28" />
        </motion.div>
      </div>
    </section>
  );
};
