import type { Documentation } from "@/server/interfaces";
import documentationData from "../../data/documentation.json";

export class DocumentationRepository {
  static findAll = async (): Promise<Documentation[]> => {
    const documentations = documentationData as Documentation[];
    return documentations;
  };
}
