import type { Documentation } from "@/server/interfaces";
import { DocumentationRepository } from "./documentation.repository";

export class DocumentationService {
  static getAll = async (): Promise<Documentation[]> => {
    const documentations = await DocumentationRepository.findAll();
    return documentations;
  };
}
