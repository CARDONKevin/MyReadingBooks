import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {BookService} from '../../../services/book.service';
import {takeUntil} from 'rxjs/operators';
import {BookPresentation} from '../../../models/book/BookPresentation';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.scss']
})
export class BookListingComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();
  books: BookPresentation[];

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.books = [];
    this.seeBooks();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  seeBooks(): void {
    this.bookService.getBooks()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.books = apiResponse;
      });
  }

  gotoBook(book: any): void {
    this.router.navigate([`book/` + book.id]);
  }

}
