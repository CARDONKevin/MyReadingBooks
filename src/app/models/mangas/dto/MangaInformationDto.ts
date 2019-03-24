export interface MangaInformationDto {
  aka: Array<string>;
  'aka-alias': Array<string>;
  alias: string;
  artist: string;
  artist_kw: Array<string>;
  author: string;
  author_kw: Array<string>;
  autoManga: boolean;
  baka: boolean;
  categories: Array<string>;
  chapters: Array<[number, number, string, string]>;
  chapters_len: number;
  created: number;
  description: string;
  hits: number;
  image: string;
  imageURL: string;
  language: number;
  last_chapter_date: number;
  released: number;
  startsWith: string;
  status: number;
  title: string;
  title_kw: Array<string>;
  type: number;
  updatedKeywords: boolean;
  url: string;
}

