import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MangaEdenApiResponseDto} from '../models/mangas/dto/MangaEdenApiResponseDto';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MangaChapterDto} from '../models/mangas/dto/MangaChapterDto';
import {MangaInformationDto} from '../models/mangas/dto/MangaInformationDto';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  readonly URL_MANGA = 'https://www.mangaeden.com/api/list/0/';
  readonly URL_MANGA_INFO = 'https://www.mangaeden.com/api/manga/';
  readonly URL_MANGA_CHAPTER = 'https://www.mangaeden.com/api/chapter/';
  readonly httpOptions = {
    headers: new HttpHeaders({
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
      }
    )
  };

  constructor(private http: HttpClient) {
  }

  public getMangas(): Observable<MangaEdenApiResponseDto> {
    return this.http.get<any>(this.URL_MANGA, this.httpOptions);
  }

  public getMangasPaginateWith500ByPage(pageNumber: number): Observable<MangaEdenApiResponseDto> {
    return this.http.get<any>(this.URL_MANGA + '?p=' + pageNumber, this.httpOptions);
  }

  public getMangasWithPagination(pageNumber: number, numberInPage: number): Observable<MangaEdenApiResponseDto> {
    return this.http.get<any>(this.URL_MANGA + '?p=' + pageNumber + '&l=' + numberInPage, this.httpOptions);
  }

  public getMangaInformation(idManga: string): Observable<MangaInformationDto> {
    return this.http.get<any>(this.URL_MANGA_INFO + idManga + '/');
  }

  public getMangaChapter(idMangaChapter: string): Observable<MangaChapterDto> {
    return this.http.get<any>(this.URL_MANGA_CHAPTER + idMangaChapter + '/');
  }
}
