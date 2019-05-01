import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BookPresentation} from '../../../models/book/BookPresentation';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookChapters} from '../../../models/book/BookChapters';
import {takeUntil} from 'rxjs/operators';
import {DefinitionOfWordService} from '../../../services/definition-of-word.service';

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
  definitionWordApi: any;

  constructor(private bookService: BookService, private route: ActivatedRoute,
              private router: Router, private definitionService: DefinitionOfWordService) {
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

  public definitionOfWordSelected(): void {
    const s = window.getSelection();
    const range = s.getRangeAt(0);
    const node = s.anchorNode;
    while (range.toString().indexOf(' ') !== 0) {
      range.setStart(node, (range.startOffset - 1));
    }
    range.setStart(node, range.startOffset + 1);
    do {
      range.setEnd(node, range.endOffset + 1);

    } while (range.toString().indexOf(' ') === -1 && range.toString().trim() !== '');
    const str = range.toString().trim();
    this.definitionService.getDefinitionWord(str)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.definitionWordApi = Object.values(apiResponse.query.pages)[0];
      });
  }

}
