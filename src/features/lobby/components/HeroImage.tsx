import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { renderElements } from "@/utils";
import Image from "next/image";

export const HeroImage = () => {
  const heroList = [
    {
      id: "0",
      alt: "hero-image-0",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756091810/IMG_8169_pzib8a.jpg",
    },
    {
      id: "1",
      alt: "hero-image-1",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756091646/IMG_0422_fr0feh.jpg",
    },
    {
      id: "2",
      alt: "hero-image-2",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090801/UMKM_f4r2vw.jpg",
    },
    {
      id: "3",
      alt: "hero-image-3",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090797/Koperasi_q2zqja.jpg",
    },
    {
      id: "4",
      alt: "hero-image-4",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090814/Rosok_yn4yyz.jpg",
    },
    {
      id: "5",
      alt: "hero-image-5",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090806/IMG_2270_npqjmn.jpg",
    },
    {
      id: "6",
      alt: "hero-image-6",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756091301/IMG-20250816-WA0068_ezgdnp.jpg",
    },
    {
      id: "7",
      alt: "hero-image-7",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090802/Rosok_SD_fjq395.jpg",
    },
    {
      id: "8",
      alt: "hero-image-8",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090802/KWT_cbv07c.jpg",
    },
    {
      id: "9",
      alt: "hero-image-9",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090800/IMG_1867_ovoxj7.jpg",
    },
    {
      id: "10",
      alt: "hero-image-10",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1756090796/PKK_pautyb.jpg",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="h-full"
    >
      <CarouselContent className="h-[50vh]">
        {renderElements({
          of: heroList,
          keyExtractor: (hero) => hero.id,
          render: (hero) => {
            return (
              <CarouselItem>
                <div className="h-full">
                  <Image
                    src={hero.url}
                    alt={hero.alt}
                    width={20000}
                    height={20000}
                    className="h-full object-cover"
                  />
                </div>
              </CarouselItem>
            );
          },
        })}
      </CarouselContent>
      <CarouselPrevious className="left-5 cursor-pointer" />
      <CarouselNext className="right-5 cursor-pointer" />
    </Carousel>
  );
};
