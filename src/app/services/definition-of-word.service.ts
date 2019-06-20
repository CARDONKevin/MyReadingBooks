import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefinitionOfWordService {

  constructor(private http: HttpClient) {
  }

  readonly DEF_FR = 'https://fr.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&format=json&titles=';
  readonly DEF_EN = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&format=json&titles=';

  public getDefinitionWord(word: string): Observable<any> {
    return this.http.get<any>(this.DEF_FR + word.replace('.', '')
      .replace(',', '').replace('!', '')
      .replace(';', '').replace(':', '')
      .replace('?', '').replace('(', '')
      .replace(')', '').replace('{', '')
      .replace('}', '').replace('[', '')
      .replace(']', ''));
  }

}
