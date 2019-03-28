import {MangaPresentation} from '../models/mangas/MangaPresentation';
import {MangaPresentationDto} from '../models/mangas/dto/MangaPresentationDto';
import {MangaInformationDto} from '../models/mangas/dto/MangaInformationDto';
import {MangaInformation} from '../models/mangas/MangaInformation';

export class MangaMapper {

  public MangaPresentationDtoToDomain(manga: MangaPresentationDto): MangaPresentation {
    return {
      categories: manga.c,
      id: manga.i,
      image: manga.im,
      date: manga.ld,
      title: manga.t
    };
  }

  public MangaInformationDtoToDomain(manga: MangaInformationDto): MangaInformation {
    return {
      alias: manga.alias,
      artist: manga.artist,
      author: manga.author,
      categories: manga.categories,
      chapters: manga.chapters,
      chapters_len: manga.chapters_len,
      created: manga.created,
      description: manga.description,
      image: manga.image,
      imageURL: manga.imageURL,
      language: manga.language,
      last_chapter_date: manga.last_chapter_date,
      released: manga.released,
      title: manga.title
    };
  }
}
