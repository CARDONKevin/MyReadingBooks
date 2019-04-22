import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BookPresentation} from '../../../models/book/BookPresentation';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookChapters} from '../../../models/book/BookChapters';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-book-chapters',
  templateUrl: './book-chapters.component.html',
  styleUrls: ['./book-chapters.component.scss']
})
export class BookChaptersComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();
  book: BookPresentation;
  chapters: BookChapters[];
  bookId: string;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.bookId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.chapters = [];
    this.seeBook();
    this.seeChapters();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  seeBook(): void {
    this.bookService.getBook(+this.bookId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.book = apiResponse;
      });
  }

  seeChapters(): void {
    this.bookService.getBookChapter(+this.bookId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.chapters = apiResponse;
      });
  }

}
