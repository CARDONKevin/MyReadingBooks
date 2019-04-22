import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListingComponent } from './book-listing.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {of} from 'rxjs';
import {BookService} from '../../../services/book.service';
import {BookPresentation} from '../../../models/book/BookPresentation';

let book: BookPresentation;
describe('BookListingComponent', () => {
  let component: BookListingComponent;
  let fixture: ComponentFixture<BookListingComponent>;
  let bookService: BookService;

  book = {
    id: 1,
    author: 'author',
    authorMail: 'author@test.com',
    title: 'title',
    creationDate: '12345',
    picture: 'picture',
    categorie: 'categ'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListingComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxPaginationModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListingComponent);
    bookService = TestBed.get(BookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('ngOnInit',  () => {
    const books = [];
    books.push(book);
    spyOn(bookService, 'getBooks').and.returnValue(of(books));

    component.ngOnInit();
    expect(component.books).toEqual(books);

  });
});
