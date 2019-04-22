import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtObject} from '../models/jwt/JwtObject';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(private http: HttpClient) {
  }

  readonly URL_JWT_USER = 'https://my-reading-books-back-dev.herokuapp.com/signin/';

  readonly httpOptions = {
    headers: new HttpHeaders({
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
        Authorization: ' Bearer eyJhbGciO' +
          'iJIUzI1NiJ9.eyJzdWIiOiJrZXYiLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0NMSUVOVCJ9XSwi' +
          'aWF0IjoxNTU1OTI2OTg1LCJleHAiOjE1NTU5MzQxODV9.IVnb2FvENXWjZQ1u4O_DQis6Wda11ZIqJ1QgYQfrf0U',
        responseType: 'text'

      }
    )
  };

  public getToken(name: string): Observable<JwtObject> {
    return this.http.get<any>(this.URL_JWT_USER +
      name.replace(/[ÿ]/g, 'y').replace(/[Ññ]/g, 'n')
        .replace(/[ÙÚÛÜùúûü]/g, 'u').replace(/[ÌÍÎÏìíîï]/g, 'i')
        .replace(/[Çç]/g, 'c').replace(/[ÒÓÔÕÖØòóôõöø]/g, 'o')
        .replace(' ', '').replace(/[ÈÉÊËèéêë]/g, 'e')
        .replace(/[ÀÁÂÃÄÅàáâãäå]/g, 'a')
      , this.httpOptions);
  }
}
