import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BookPresentation} from '../models/book/BookPresentation';
import {BookChapters} from '../models/book/BookChapters';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  readonly URL_BOOKS = 'https://my-reading-books-back.herokuapp.com/book/';
  readonly URL_BOOKS_AUTHOR = 'https://my-reading-books-back.herokuapp.com/book/author/';
  readonly URL_BOOK_CHAPTER = 'https://my-reading-books-back.herokuapp.com/chapter/book/';
  readonly URL_CHAPTER = 'https://my-reading-books-back.herokuapp.com/chapter/';
  readonly URL_DELETE_BOOK = 'https://my-reading-books-back-dev.herokuapp.com/book/delete/';
  readonly URL_EDIT_BOOK = 'https://my-reading-books-back-dev.herokuapp.com/book/update/';
  readonly URL_DELETE_CHAPTER = 'https://my-reading-books-back-dev.herokuapp.com/chapter/delete/';
  readonly URL_EDIT_CHAPTER = 'https://my-reading-books-back-dev.herokuapp.com/chapter/update/';

  readonly httpOptions = {
    headers: new HttpHeaders({
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
        Authorization: 'Bearer ' + this.getTokenValid()
      }
    )
  };

  readonly jsonApplicationHeader = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getTokenValid()
      }
    )
  };

  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<BookPresentation[]> {
    return this.http.get<any>(this.URL_BOOKS, this.httpOptions);
  }

  public getBooksOfAuthor(email: string): Observable<BookPresentation[]> {
    return this.http.get<any>(this.URL_BOOKS_AUTHOR + email, this.httpOptions);
  }

  public getBook(id: number): Observable<BookPresentation> {
    return this.http.get<any>(this.URL_BOOKS + id, this.httpOptions);
  }

  public getBookChapter(id: number): Observable<BookChapters[]> {
    return this.http.get<any>(this.URL_BOOK_CHAPTER + id, this.httpOptions);
  }

  public postBook(book: BookPresentation): Observable<BookPresentation> {
    return this.http.post<any>(this.URL_BOOKS, book, this.jsonApplicationHeader);
  }

  public postChapter(bookChapter: any): Observable<BookChapters> {
    const result = this.http.post<any>(this.URL_CHAPTER, bookChapter, this.jsonApplicationHeader);
    result.subscribe();
    return result;
  }

  public deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(this.URL_DELETE_BOOK + id, this.jsonApplicationHeader);
  }

  public deleteChapterBook(id: number): Observable<any> {
    return this.http.delete<any>(this.URL_DELETE_CHAPTER + id, this.jsonApplicationHeader);
  }

  public editBook(book: BookPresentation, id: number): Observable<BookPresentation> {
    return this.http.patch<any>(this.URL_EDIT_BOOK + id, book, this.jsonApplicationHeader);
  }

  public editBookChapter(chapter: BookChapters, id: number): Observable<BookChapters> {
    return this.http.patch<any>(this.URL_EDIT_CHAPTER + id, chapter, this.jsonApplicationHeader);
  }

  public getTokenValid(): string {
    return localStorage.getItem('tokenJwt');
  }

}
