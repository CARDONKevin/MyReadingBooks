import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaPresentationComponent } from './manga-presentation.component';
import {MangaInformationDto} from '../../../models/mangas/dto/MangaInformationDto';
import {of} from 'rxjs';
import {MangaService} from '../../../services/manga.service';
import {MangaMapper} from '../../../mappers/manga-mapper';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

let mangaService: MangaService;
let mapper: MangaMapper;

describe('MangaPresentationComponent', () => {
  let component: MangaPresentationComponent;
  let fixture: ComponentFixture<MangaPresentationComponent>;
  let mockedInformationManga: MangaInformationDto;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaPresentationComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxPaginationModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaPresentationComponent);
    component = fixture.componentInstance;
    mangaService = TestBed.get(MangaService);
    mapper = new MangaMapper();
    fixture.detectChanges();

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
});
