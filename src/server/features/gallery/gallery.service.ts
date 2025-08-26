import type { Gallery } from "@/server/interfaces";
import { GalleryRepository } from "./gallery.repository";

export class GalleryService {
  static getAll = async (): Promise<Gallery[]> => {
    const gallery = await GalleryRepository.findAll();
    return gallery;
  };
}
