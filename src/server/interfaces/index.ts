export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    limit: number;
    page: number;
    last_page: number;
  };
}

export interface Student {
  id: string;
  name: string;
  nickname: string;
  major: string;
  image: string;
  division: {
    name: string;
    position?: string;
    tag: string;
  };
  program: {
    name: string;
    alias: string;
    position: string;
    tag: string;
  };
  socialMedia: {
    instagram: string;
  };
}

export interface Schedule {
  id: string;
  day: string;
  studentsID: string[];
  studentLeadId: string;
}

export interface Gallery {
  id: string;
  title: string;
  image: string;
  orientation: "landscape" | "portrait";
}

export type CloudName =
  | "drive"
  | "onedrive"
  | "dropbox"
  | "mega"
  | "icloud"
  | "box"
  | "pcloud"
  | "mediafire"
  | "amazon"
  | "yandex"
  | "nextcloud"
  | "owncloud";

export interface Documentation {
  id: string;
  title: string;
  url: string;
  password?: string;
  file_type: "zip" | "tar" | "7z" | "rar";
  type: "list" | "hero";
  size: {
    total: number;
    type: "kb" | "mb" | "gb" | "tb";
  };
  cloud_name: CloudName;
}
