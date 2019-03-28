import {MangaMapper} from './manga-mapper';
import {MangaPresentationDto} from '../models/mangas/dto/MangaPresentationDto';
import {MangaInformationDto} from '../models/mangas/dto/MangaInformationDto';

const mangaPresentationDto: MangaPresentationDto = {
  a: 'shoujo-apocalypse-adventure',
  c: [
    'Tragedy'
  ],
  h: 156,
  i: '5c410d31719a16035a4647cc',
  im: '4a/4a1f2a595e0e84e62f6ceddf3946274478928ca99e8df86bc6511b6e.png',
  ld: 1547822837.0,
  s: 2,
  t: 'Shoujo Apocalypse Adventure'
};

const mangaPresentationDtoEmpty: MangaPresentationDto = {
  a: null,
  c: null,
  h: null,
  i: null,
  im: null,
  ld: null,
  s: null,
  t: null
};

const mangaInformationDto: MangaInformationDto = {
  aka: ['aka'],
  'aka-alias': ['aka alias'],
  alias: 'alias',
  artist: 'art ist',
  artist_kw: ['art', 'ist'],
  author: 'aut hor',
  author_kw: ['aut', 'hor'],
  autoManga: true,
  baka: true,
  categories: ['school life'],
  chapters: [[1, 145555.0, 'test', 'test2']],
  chapters_len: 1,
  created: 12589.0,
  description: 'Humans are dead',
  hits: 147,
  image: '14896235.png',
  imageURL: 'c4/4521524.png',
  language: 0,
  last_chapter_date: 15423.0,
  released: 15241.0,
  startsWith: 't',
  status: 1,
  title: 'title book',
  title_kw: ['title', 'book'],
  type: 1,
  updatedKeywords: true,
  url: 'url'
};

const mangaInformationDtoEmpty: MangaInformationDto = {
  aka: null,
  'aka-alias': null,
  alias: null,
  artist: null,
  artist_kw: null,
  author: null,
  author_kw: null,
  autoManga: null,
  baka: null,
  categories: null,
  chapters: null,
  chapters_len: null,
  created: null,
  description: null,
  hits: null,
  image: null,
  imageURL: null,
  language: null,
  last_chapter_date: null,
  released: null,
  startsWith: null,
  status: null,
  title: null,
  title_kw: null,
  type: null,
  updatedKeywords: null,
  url: null
};


describe('MangaMapper', () => {
  it('should create an instance', () => {
    expect(new MangaMapper()).toBeTruthy();
  });

  it('should create a MangaPresentation', () => {
    const mapper = new MangaMapper();
    const manga = mapper.MangaPresentationDtoToDomain(mangaPresentationDto);
    expect(manga.title).toEqual(mangaPresentationDto.t);
    expect(manga.image).toEqual(mangaPresentationDto.im);
    expect(manga.categories).toEqual(mangaPresentationDto.c);
    expect(manga.date).toEqual(mangaPresentationDto.ld);
    expect(manga.id).toEqual(mangaPresentationDto.i);
  });

  it('should create a MangaPresentation by empty field object', () => {
    const mapper = new MangaMapper();
    const manga = mapper.MangaPresentationDtoToDomain(mangaPresentationDtoEmpty);
    expect(manga.title).toEqual(null);
    expect(manga.image).toEqual(null);
    expect(manga.categories).toEqual(null);
    expect(manga.date).toEqual(null);
    expect(manga.id).toEqual(null);
  });

  it('should create a MangaInformation', () => {
    const mapper = new MangaMapper();
    const manga = mapper.MangaInformationDtoToDomain(mangaInformationDto);
    expect(manga.author).toEqual(mangaInformationDto.author);
    expect(manga.alias).toEqual(mangaInformationDto.alias);
    expect(manga.artist).toEqual(mangaInformationDto.artist);
    expect(manga.categories).toEqual(mangaInformationDto.categories);
    expect(manga.chapters).toEqual(mangaInformationDto.chapters);
    expect(manga.chapters_len).toEqual(mangaInformationDto.chapters_len);
    expect(manga.description).toEqual(mangaInformationDto.description);
    expect(manga.image).toEqual(mangaInformationDto.image);
    expect(manga.imageURL).toEqual(mangaInformationDto.imageURL);
    expect(manga.language).toEqual(mangaInformationDto.language);
    expect(manga.last_chapter_date).toEqual(mangaInformationDto.last_chapter_date);
    expect(manga.released).toEqual(mangaInformationDto.released);
    expect(manga.title).toEqual(mangaInformationDto.title);
  });

  it('should create a MangaInformation by empty field object', () => {
    const mapper = new MangaMapper();
    const manga = mapper.MangaInformationDtoToDomain(mangaInformationDtoEmpty);
    expect(manga.author).toEqual(null);
    expect(manga.alias).toEqual(null);
    expect(manga.artist).toEqual(null);
    expect(manga.categories).toEqual(null);
    expect(manga.chapters).toEqual(null);
    expect(manga.chapters_len).toEqual(null);
    expect(manga.description).toEqual(null);
    expect(manga.image).toEqual(null);
    expect(manga.imageURL).toEqual(null);
    expect(manga.language).toEqual(null);
    expect(manga.last_chapter_date).toEqual(null);
    expect(manga.released).toEqual(null);
    expect(manga.title).toEqual(null);
  });
});
