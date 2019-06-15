import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentNote} from '../models/notation/CommentNote';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  readonly jsonApplicationHeader = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getTokenValid()
      }
    )
  };

  readonly BASE_URL = 'https://my-reading-books-back.herokuapp.com/comment/';

  public postComment(commentNote: any): Observable<CommentNote> {
    return this.http.post<any>(this.BASE_URL, commentNote, this.jsonApplicationHeader);
  }

  public getCommentOfType(type: string): Observable<CommentNote[]> {
    return this.http.get<any>(this.BASE_URL + type, this.jsonApplicationHeader);
  }

  public getCommentOfTypeOfMangaIdOrBookId(type: string, id: string): Observable<CommentNote[]> {
    return this.http.get<any>(this.BASE_URL + type + '/' + id, this.jsonApplicationHeader);
  }

  public getMyCommentOfTypeOfMangaIdOrBookId(type: string, id: string, name: string): Observable<CommentNote> {
    return this.http.get<any>(this.BASE_URL + type + '/' + id + '/' + name, this.jsonApplicationHeader);
  }

  public getTokenValid(): string {
    return localStorage.getItem('tokenJwt');
  }
}
