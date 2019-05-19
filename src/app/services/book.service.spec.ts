import {inject, TestBed} from '@angular/core/testing';

import {BookService} from './book.service';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';


const chapter = {
  id: 1,
  title: 'title',
  creationDate: '12345',
  picture: 'picture',
  content: 'content',
  bookId: 1
};

const book = {
  id: 1,
  author: 'author',
  authorMail: 'author@test.com',
  title: 'title',
  creationDate: '12345',
  picture: 'picture',
  categorie: 'categ'
};

const empty = '';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should get list of book', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      const books = [];
      books.push(book);
      spyOn(http, 'get').and.returnValue(of(books));
      service.getBooks().subscribe(response => {
        expect(response[0].author).toEqual(book.author);
        expect(response[0].authorMail).toEqual(book.authorMail);
        expect(response[0].title).toEqual(book.title);
        expect(response[0].id).toEqual(book.id);
        expect(response[0].picture).toEqual(book.picture);
        expect(response[0].categorie).toEqual(book.categorie);
        expect(response[0].creationDate).toEqual(book.creationDate);

      });
    }));

  it('should get list of book of author', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      const books = [];
      books.push(book);
      spyOn(http, 'get').and.returnValue(of(books));
      service.getBooksOfAuthor(book.authorMail).subscribe(response => {
        expect(response[0].author).toEqual(book.author);
        expect(response[0].authorMail).toEqual(book.authorMail);
        expect(response[0].title).toEqual(book.title);
        expect(response[0].id).toEqual(book.id);
        expect(response[0].picture).toEqual(book.picture);
        expect(response[0].categorie).toEqual(book.categorie);
        expect(response[0].creationDate).toEqual(book.creationDate);

      });
    }));

  it('should get one book', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      spyOn(http, 'get').and.returnValue(of(book));
      service.getBook(book.id).subscribe(response => {
        expect(response.author).toEqual(book.author);
        expect(response.authorMail).toEqual(book.authorMail);
        expect(response.title).toEqual(book.title);
        expect(response.id).toEqual(book.id);
        expect(response.picture).toEqual(book.picture);
        expect(response.categorie).toEqual(book.categorie);
        expect(response.creationDate).toEqual(book.creationDate);

      });
    }));

  it('should post one book', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      spyOn(http, 'post').and.returnValue(of(book));
      service.postBook(book).subscribe(response => {
        expect(response.author).toEqual(book.author);
        expect(response.authorMail).toEqual(book.authorMail);
        expect(response.title).toEqual(book.title);
        expect(response.id).toEqual(book.id);
        expect(response.picture).toEqual(book.picture);
        expect(response.categorie).toEqual(book.categorie);
        expect(response.creationDate).toEqual(book.creationDate);

      });
    }));

  it('should get list of book chapters', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      const bookChapters = [];
      bookChapters.push(chapter);
      spyOn(http, 'get').and.returnValue(of(bookChapters));
      service.getBookChapter(book.id).subscribe(response => {
        expect(response[0].bookId).toEqual(chapter.bookId);
        expect(response[0].content).toEqual(chapter.content);
        expect(response[0].title).toEqual(chapter.title);
        expect(response[0].id).toEqual(chapter.id);
        expect(response[0].creationDate).toEqual(chapter.creationDate);
        expect(response[0].picture).toEqual(chapter.picture);

      });
    }));

  it('should update one book', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      spyOn(http, 'patch').and.returnValue(of(book));
      service.editBook(book, 1).subscribe(response => {
        expect(response.author).toEqual(book.author);
        expect(response.authorMail).toEqual(book.authorMail);
        expect(response.title).toEqual(book.title);
        expect(response.id).toEqual(book.id);
        expect(response.picture).toEqual(book.picture);
        expect(response.categorie).toEqual(book.categorie);
        expect(response.creationDate).toEqual(book.creationDate);

      });
    }));

  it('should post one chapter', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      spyOn(http, 'post').and.returnValue(of(chapter));
      service.postChapter(chapter).subscribe(response => {
        expect(response.title).toEqual(chapter.title);

      });
    }));

  it('should update one chapter', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      spyOn(http, 'post').and.returnValue(of(chapter));
      service.editBookChapter(chapter, 1).subscribe(response => {
        expect(response.title).toEqual(chapter.title);

      });
    }));

  it('should delete one chapter', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      spyOn(http, 'delete').and.returnValue(of(empty));
      service.deleteChapterBook(chapter.id).subscribe(response => {
        expect(response).toEqual(empty);
      });
    }));

  it('should delete one book', inject([BookService, HttpClient],
    (service: BookService, http: HttpClient) => {
      spyOn(http, 'delete').and.returnValue(of(empty));
      service.deleteBook(book.id).subscribe(response => {
        expect(response).toEqual(empty);
      });
    }));
});
