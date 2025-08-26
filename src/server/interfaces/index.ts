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
