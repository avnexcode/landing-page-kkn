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
      id: "1",
      alt: "hero-image-1",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1752242978/IMG_0090_ldafa6.jpg",
    },
    {
      id: "2",
      alt: "hero-image-2",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1752242775/IMG_0085_i28iz4.jpg",
    },
    {
      id: "3",
      alt: "hero-image-3",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1752242776/IMG_0014_v1ywfd.jpg",
    },
    {
      id: "4",
      alt: "hero-image-4",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1752242964/WhatsApp_Image_2025-07-05_at_15.59.40_373c64f1_r6qnd4.jpg",
    },
    {
      id: "5",
      alt: "hero-image-5",
      url: "https://res.cloudinary.com/dxwmdooxc/image/upload/v1752242879/WhatsApp_Image_2025-07-05_at_15.59.40_bc4c0733_whtdgi.jpg",
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
