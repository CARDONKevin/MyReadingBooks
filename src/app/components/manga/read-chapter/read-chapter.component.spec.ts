import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReadChapterComponent} from './read-chapter.component';
import {MangaChapterDto} from '../../../models/mangas/dto/MangaChapterDto';
import {MangaService} from '../../../services/manga.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';

describe('ReadChapterComponent', () => {
  let component: ReadChapterComponent;
  let fixture: ComponentFixture<ReadChapterComponent>;
  let mockedChaptersResponse: MangaChapterDto;
  let mangaService: MangaService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadChapterComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxPaginationModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadChapterComponent);
    component = fixture.componentInstance;
    mangaService = TestBed.get(MangaService);
    fixture.detectChanges();

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

  });

  it('ngOnInit', () => {
    spyOn(mangaService, 'getMangaChapter').and.returnValue(of(mockedChaptersResponse));

    component.ngOnInit();
    expect(component.chapter.images).toEqual(mockedChaptersResponse.images);

    expect(mangaService.getMangaChapter).toHaveBeenCalled();

  });
});
