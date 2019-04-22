import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookChaptersComponent} from './book-chapters.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BookService} from '../../../services/book.service';
import {of} from 'rxjs';
import {BookChapters} from '../../../models/book/BookChapters';
import {BookPresentation} from '../../../models/book/BookPresentation';

let bookService: BookService;
let chapter: BookChapters;
let chapters: BookChapters[];
let book: BookPresentation;

describe('BookChaptersComponent', () => {
  let component: BookChaptersComponent;
  let fixture: ComponentFixture<BookChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookChaptersComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxPaginationModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookChaptersComponent);
    bookService = TestBed.get(BookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    chapter = {
      id: 1,
      title: 'title',
      creationDate: '12345',
      picture: 'picture',
      content: 'content',
      bookId: 1
    };
    chapters = [
      {
        id: 1,
        title: 'title',
        creationDate: '12345',
        picture: 'picture',
        content: 'content',
        bookId: 1
      }
    ];
    book = {
      id: 1,
      author: 'author',
      authorMail: 'author@test.com',
      title: 'title',
      creationDate: '12345',
      picture: 'picture',
      categorie: 'categ'
    };
  });

  it('ngOnInit',  () => {
    spyOn(bookService, 'getBookChapter').and.returnValue(of(chapters));
    spyOn(bookService, 'getBook').and.returnValue(of(book));

    component.ngOnInit();
    expect(component.chapters).toEqual(chapters);
    expect(component.book).toEqual(book);

  });
});
