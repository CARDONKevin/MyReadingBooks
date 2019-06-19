import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {BookService} from '../../services/book.service';
import {MangaService} from '../../services/manga.service';
import {CommentNote} from '../../models/notation/CommentNote';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {BookPresentation} from '../../models/book/BookPresentation';
import {MangaMapper} from '../../mappers/manga-mapper';
import {MangaInformation} from '../../models/mangas/MangaInformation';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-best-top',
  templateUrl: './best-top.component.html',
  styleUrls: ['./best-top.component.scss']
})
export class BestTopComponent implements OnInit {

  private allCommentManga: CommentNote[];
  private allCommentBook: CommentNote[];
  bestBook: BookPresentation;
  bestManga: MangaInformation;
  mapBookCommentAndNote: Map<string, number> = new Map<string, number>();
  mapBookCount: Map<string, number> = new Map<string, number>();
  mapMangaCommentAndNote: Map<string, number> = new Map<string, number>();
  mapMangaCount: Map<string, number> = new Map<string, number>();
  idBestManga: string;
  idBestBook: string;
  listManga: Array<string> = [];
  listBook: Array<string> = [];
  averageBook: number;
  averageManga: number;


  private ngUnsubscribe = new Subject<void>();

  constructor(private commentNoteService: CommentService,
              private bookService: BookService,
              private mangaService: MangaService, private router: Router
              ) { }
  ngOnInit() {
    this.averageManga = 0;
    this.averageBook = 0;
    this.getCommentsBook();
    this.getCommentsManga();
  }

  getCommentsBook(): void {
    this.commentNoteService.getCommentOfType('book')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.allCommentBook = apiResponse;
        this.allCommentBook.forEach(item => {
          this.mapBookCommentAndNote.set(item.idBook, 0);
          this.idBestBook = item.idBook;
        });
        this.allCommentBook.forEach(item => this.mapBookCount.set(item.idBook, 0));
        this.allCommentBook.forEach(item => {
          const value = +this.mapBookCommentAndNote.get(item.idBook);
          const noteItem = +item.notation;
          this.listBook.push(item.idBook);
          this.mapBookCommentAndNote.set(item.idBook, noteItem + value);
        });
        this.allCommentBook.forEach(item => {
            const value = +this.mapBookCount.get(item.idBook);
            this.mapBookCount.set(item.idBook, value + 1);
          });
        this.listBook = Array.from(new Set(this.listBook));
        this.getBestValueBook();
      });
  }

  getCommentsManga(): void {
    this.commentNoteService.getCommentOfType('manga')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.allCommentManga = apiResponse;
        this.allCommentManga.forEach(item => {
          this.mapMangaCommentAndNote.set(item.idBook, 0);
          this.idBestManga = item.idBook;
        });
        this.allCommentManga.forEach(item => this.mapMangaCount.set(item.idBook, 0));
        this.allCommentManga.forEach(item => {
          const value = +this.mapMangaCommentAndNote.get(item.idBook);
          const noteItem = +item.notation;
          this.listManga.push(item.idBook);
          this.mapMangaCommentAndNote.set(item.idBook, noteItem + value);

        });
        this.allCommentManga.forEach(item => {
          const value = +this.mapMangaCount.get(item.idBook);
          this.mapMangaCount.set(item.idBook, value + 1);
        });
        this.listManga = Array.from(new Set(this.listManga));
        this.getBestValueManga();
      });
  }

  getBestValueBook(): void {
    this.listBook.forEach(item => {
      const value = +this.mapBookCommentAndNote.get(item);
      const diviseur = +this.mapBookCount.get(item);
      const oldValue = +this.mapBookCommentAndNote.get(this.idBestBook);
      const oldDiviseur = +this.mapBookCount.get(this.idBestBook);

      if (this.averageBook === 0) {
        this.averageBook = oldValue / oldDiviseur;
      }

      if ((value / diviseur) > (oldValue / oldDiviseur)) {
        this.idBestBook = item;
        this.averageBook = value / diviseur;
      }
    });

    this.getBook();
  }

  getBestValueManga(): void {
    this.listManga.forEach(item => {
      const value = +this.mapMangaCommentAndNote.get(item);
      const diviseur = +this.mapMangaCount.get(item);
      const oldValue = +this.mapMangaCommentAndNote.get(this.idBestManga);
      const oldDiviseur = +this.mapMangaCount.get(this.idBestManga);

      if (this.averageManga === 0) {
        this.averageManga = oldValue / oldDiviseur;
      }

      if ((value / diviseur) > (oldValue / oldDiviseur)) {
        this.idBestManga = item;
        this.averageManga = value / diviseur;
      }
    });

    this.getManga();
  }

  getManga(): void {
    const mapper = new MangaMapper();
    this.mangaService.getMangaInformation(this.idBestManga)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.bestManga = mapper.MangaInformationDtoToDomain(apiResponse);
      });
  }

  getBook(): void {
    this.bookService.getBook(+this.idBestBook)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.bestBook = apiResponse;
      });
  }

  gotoManga(manga: any): void {
    this.router.navigate([`manga/` + this.idBestManga]);
  }

  gotoBook(book: any): void {
    this.router.navigate([`book/` + this.idBestBook]);
  }
}
