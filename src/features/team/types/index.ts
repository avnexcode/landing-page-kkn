export type Student = {
  id: string;
  name: string;
  nickname: string;
  major: string;
  image: string;
  division: {
    name: string;
    position: string;
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
};
