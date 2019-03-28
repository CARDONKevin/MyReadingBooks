import {inject, TestBed} from '@angular/core/testing';

import {MangaService} from './manga.service';
import {MangaEdenApiResponseDto} from '../models/mangas/dto/MangaEdenApiResponseDto';
import {Observable, of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

let mockedResponse: MangaEdenApiResponseDto;

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
});
