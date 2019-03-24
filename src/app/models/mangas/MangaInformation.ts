export interface MangaInformation {
  alias: string;
  artist: string;
  author: string;
  categories: Array<string>;
  chapters: Array<[number, number, string, string]>;
  chapters_len: number;
  created: number;
  description: string;
  image: string;
  imageURL: string;
  language: number;
  last_chapter_date: number;
  released: number;
  title: string;
}
