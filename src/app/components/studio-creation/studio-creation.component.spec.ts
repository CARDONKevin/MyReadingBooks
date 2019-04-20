import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioCreationComponent } from './studio-creation.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BookService} from '../../services/book.service';
import {BookChapters} from '../../models/book/BookChapters';
import {BookPresentation} from '../../models/book/BookPresentation';
import {MatStepperModule, MatTableModule} from '@angular/material';
import {AuthService} from 'angularx-social-login';

let chapters: BookChapters[];
let book: BookPresentation;
describe('StudioCreationComponent', () => {
  let component: StudioCreationComponent;
  let fixture: ComponentFixture<StudioCreationComponent>;
  let bookService: BookService;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioCreationComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxPaginationModule, MatTableModule, MatStepperModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioCreationComponent);
    bookService = TestBed.get(BookService);
    authService = TestBed.get(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();

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
});
