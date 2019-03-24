import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllListingComponent} from './all-listing.component';
import {MangaMapper} from '../../../mappers/manga-mapper';
import {of} from 'rxjs';
import {MangaService} from '../../../services/manga.service';
import {MangaEdenApiResponseDto} from '../../../models/mangas/dto/MangaEdenApiResponseDto';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

let mangaService: MangaService;
let mockedResponse: MangaEdenApiResponseDto;
let mapper: MangaMapper;

describe('AllListingComponent', () => {
  let component: AllListingComponent;
  let fixture: ComponentFixture<AllListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllListingComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxPaginationModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListingComponent);
    mangaService = TestBed.get(MangaService);
    mapper = new MangaMapper();
    component = fixture.componentInstance;
    fixture.detectChanges();
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
        },
        {
          a: 'deux',
          c: [
            'Tragedy'
          ],
          h: 156,
          i: '5c410d31719a16035a4647cc',
          im: '4a/4a1f2a595e0e84e62f6ceddf3946274478928ca99e8df86bc6511b6e.png',
          ld: 1547.0,
          s: 2,
          t: 'deux'
        }
      ],
      page: -1,
      start: 0,
      total: 2
    };
  });

  it('ngOnInit', () => {
    component.config = {
      currentPage: 1,
      itemsPerPage: 25
    };
    component.collection = [1, 2];
    spyOn(mangaService, 'getMangasWithPagination').and.returnValue(of(mockedResponse));

    component.ngOnInit();
    expect(component.mangas.length).toEqual(mockedResponse.manga.length);
    expect(component.start).toEqual(mockedResponse.start);
    expect(component.end).toEqual(mockedResponse.end);
    expect(component.total).toEqual(mockedResponse.total);
    expect(component.numberInPage).toEqual(component.config.itemsPerPage);
    expect(mangaService.getMangasWithPagination).toHaveBeenCalled();

  });

  it('pageChange not sorted', () => {
    component.sort = 'none';
    spyOn(mangaService, 'getMangasWithPagination').and.returnValue(of(mockedResponse));

    component.pageChange(1);
    expect(component.mangas.length).toEqual(mockedResponse.manga.length);
    expect(component.start).toEqual(mockedResponse.start);
    expect(component.end).toEqual(mockedResponse.end);
    expect(component.total).toEqual(mockedResponse.total);
    expect(component.numberInPage).toEqual(component.config.itemsPerPage);
    expect(mangaService.getMangasWithPagination).toHaveBeenCalled();
  });

  it('pageChange sorted by date old->recent', () => {
    component.sort = 'date';
    spyOn(mangaService, 'getMangas').and.returnValue(of(mockedResponse));

    component.pageChange(1);
    expect(component.allMangas.length).toEqual(mockedResponse.manga.length);
    expect(component.allMangas[0].title).toEqual(mockedResponse.manga[1].t);
    expect(component.allMangas[1].title).toEqual(mockedResponse.manga[0].t);
    expect(component.allMangas[0].date).toBeLessThan(component.allMangas[1].date);
    expect(mangaService.getMangas).toHaveBeenCalled();
  });

  it('pageChange sorted by reversed date recent->old', () => {
    component.sort = 'reversedDate';
    spyOn(mangaService, 'getMangas').and.returnValue(of(mockedResponse));

    component.pageChange(1);
    expect(component.allMangas.length).toEqual(mockedResponse.manga.length);
    expect(component.allMangas[0].title).toEqual(mockedResponse.manga[0].t);
    expect(component.allMangas[1].title).toEqual(mockedResponse.manga[1].t);
    expect(component.allMangas[0].date).toBeGreaterThan(component.allMangas[1].date);
    expect(mangaService.getMangas).toHaveBeenCalled();
  });

  it('pageChange sorted by alphanumeric', () => {
    component.sort = 'alpha';
    spyOn(mangaService, 'getMangas').and.returnValue(of(mockedResponse));

    component.pageChange(1);
    expect(component.allMangas.length).toEqual(mockedResponse.manga.length);
    expect(component.allMangas[0].title).toEqual(mockedResponse.manga[1].t);
    expect(component.allMangas[1].title).toEqual(mockedResponse.manga[0].t);
    expect(component.allMangas[0].title).toBeGreaterThan(component.allMangas[1].title);
    expect(mangaService.getMangas).toHaveBeenCalled();
  });

  it('pageChange sorted by reversed alphanumeric', () => {
    component.sort = 'reversedAlpha';
    spyOn(mangaService, 'getMangas').and.returnValue(of(mockedResponse));

    component.pageChange(1);
    expect(component.allMangas.length).toEqual(mockedResponse.manga.length);
    expect(component.allMangas[0].title).toEqual(mockedResponse.manga[0].t);
    expect(component.allMangas[1].title).toEqual(mockedResponse.manga[1].t);
    expect(component.allMangas[0].title).toBeLessThan(component.allMangas[1].title);
    expect(mangaService.getMangas).toHaveBeenCalled();
  });
});
