import type { Gallery } from "@/server/interfaces";
import galleryData from "../../data/gallery.json";
export class GalleryRepository {
  static findAll = async (): Promise<Gallery[]> => {
    const gallery = galleryData as Gallery[];
    return gallery;
  };
}
