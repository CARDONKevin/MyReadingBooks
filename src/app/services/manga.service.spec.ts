import {inject, TestBed} from '@angular/core/testing';

import {MangaService} from './manga.service';
import {MangaEdenApiResponseDto} from '../models/mangas/dto/MangaEdenApiResponseDto';
import {Observable, of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {MangaChapterDto} from '../models/mangas/dto/MangaChapterDto';
import {MangaInformationDto} from '../models/mangas/dto/MangaInformationDto';

let mockedResponse: MangaEdenApiResponseDto;
let mockedChaptersResponse: MangaChapterDto;
let mockedInformationManga: MangaInformationDto;


describe('MangaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    mockedResponse = {
      end: -1,
      manga: [
        {
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
        }
      ],
      page: -1,
      start: 0,
      total: 1
    };

    mockedChaptersResponse = {
      images: [
        [
          1,
          '6b/6b28aa74bf75a8ba7843c831fc7ae7a11169e32df8b3c2b3c501be71.jpg',
          869,
          1235
        ]
      ]
    };

    mockedInformationManga = {
      aka: [
        '\u5c11\u5973\u843d\u8bed\u5bb6',
        '\u3058\u3087\u3057\u3089\u304f',
        '\u5973\u5b50\u843d\u8bed'
      ],
      'aka-alias': [
        '',
        '',
        ''
      ],
      alias: 'joshiraku',
      artist: 'Yasu',
      artist_kw: [
        'yasu'
      ],
      author: 'KUMETA Kouji',
      author_kw: [
        'kumeta',
        'kouji'
      ],
      autoManga: true,
      baka: true,
      categories: [
        'Shounen',
        'Comedy',
        'Slice of Life'
      ],
      chapters: [
        [
          21,
          1543389887.0,
          'Servant\'s Vengeance',
          '5bfe42bf719a167a5c3e3add'
        ],
        [
          1,
          1543391156.0,
          'Joshiraku 1:',
          '5bfe47b5719a167a5c3e8224'
        ]
      ],
      chapters_len: 27,
      created: 1543360767.0,
      description: 'A joint effort between popular illustrators',
      hits: 0,
      image: '4e/4e55aeda6ba2044eb2762124688b61e74f24880515e71827f1f1e2c4.png',
      imageURL: null,
      language: 0,
      last_chapter_date: 1543389646.0,
      released: 2009,
      startsWith: 'j',
      status: 2,
      title: 'Joshiraku',
      title_kw: [
        'joshiraku'
      ],
      type: 0,
      updatedKeywords: true,
      url: 'http://www.mangareader.net/joshiraku'
    };
  });

  it('should return a list of all manga', inject([MangaService, HttpClient],
    (service: MangaService, http: HttpClient) => {

      spyOn(http, 'get').and.returnValue(of(mockedResponse));

      // when
      service.getMangas().subscribe(
        response => {
          expect(response.end).toEqual(mockedResponse.end);
          expect(response.start).toEqual(mockedResponse.start);
          expect(response.page).toEqual(mockedResponse.page);
          expect(response.total).toEqual(mockedResponse.total);
          expect(response.manga).toEqual(mockedResponse.manga);

        });
    }));

  it('should return a list of manga paginate by 500 by page', inject([MangaService, HttpClient],
    (service: MangaService, http: HttpClient) => {

      spyOn(http, 'get').and.returnValue(of(mockedResponse));
      const page = 0;

      // when
      service.getMangasPaginateWith500ByPage(page).subscribe(
        response => {
          expect(response.end).toEqual(mockedResponse.end);
          expect(response.start).toEqual(mockedResponse.start);
          expect(response.page).toEqual(mockedResponse.page);
          expect(response.total).toEqual(mockedResponse.total);
          expect(response.manga).toEqual(mockedResponse.manga);

        });
    }));

  it('should return a list of paginated by page and numberByPage', inject([MangaService, HttpClient],
    (service: MangaService, http: HttpClient) => {

      spyOn(http, 'get').and.returnValue(of(mockedResponse));
      const page = 0;
      const inPage = 25;

      // when
      service.getMangasWithPagination(page, inPage).subscribe(
        response => {
          expect(response.end).toEqual(mockedResponse.end);
          expect(response.start).toEqual(mockedResponse.start);
          expect(response.page).toEqual(mockedResponse.page);
          expect(response.total).toEqual(mockedResponse.total);
          expect(response.manga).toEqual(mockedResponse.manga);

        });
    }));


  it('should return information of a manga', inject([MangaService, HttpClient],
    (service: MangaService, http: HttpClient) => {

      spyOn(http, 'get').and.returnValue(of(mockedInformationManga));

      // when
      service.getMangaInformation('test').subscribe(
        response => {
          expect(response.chapters_len).toEqual(mockedInformationManga.chapters_len);
          expect(response.chapters).toEqual(mockedInformationManga.chapters);
          expect(response.title).toEqual(mockedInformationManga.title);
          expect(response.released).toEqual(mockedInformationManga.released);
          expect(response.last_chapter_date).toEqual(mockedInformationManga.last_chapter_date);
          expect(response.language).toEqual(mockedInformationManga.language);
          expect(response.imageURL).toEqual(mockedInformationManga.imageURL);
          expect(response.image).toEqual(mockedInformationManga.image);
          expect(response.description).toEqual(mockedInformationManga.description);
          expect(response.categories).toEqual(mockedInformationManga.categories);
          expect(response.artist).toEqual(mockedInformationManga.artist);
          expect(response.author).toEqual(mockedInformationManga.author);
          expect(response.created).toEqual(mockedInformationManga.created);

        });
    }));

  it('should return chapters of a manga', inject([MangaService, HttpClient],
    (service: MangaService, http: HttpClient) => {

      spyOn(http, 'get').and.returnValue(of(mockedChaptersResponse));

      // when
      service.getMangaChapter('test').subscribe(
        response => {
          expect(response.images).toEqual(mockedChaptersResponse.images);
        });
    }));
});
