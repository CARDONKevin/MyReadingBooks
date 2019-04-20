import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService, SocialUser} from "angularx-social-login";
import {BookService} from "../../services/book.service";
import {takeUntil} from "rxjs/operators";
import {of, Subject} from "rxjs";
import {BookPresentation} from "../../models/book/BookPresentation";
import {BookChapters} from "../../models/book/BookChapters";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-studio-creation',
  templateUrl: './studio-creation.component.html',
  styleUrls: ['./studio-creation.component.scss']
})
export class StudioCreationComponent implements OnInit, OnDestroy {

  user: SocialUser;
  loggedIn: boolean;
  allBookUser: BookPresentation[];
  activatedBook: BookPresentation;
  isCreatedChapter = false;
  visionChapters = false;
  allChaptersOfBook: BookChapters[];
  private ngUnsubscribe = new Subject<void>();

  displayedColumns: string[] = ['title', 'creationDate'];



  @ViewChild('stepper') stepper;


  constructor(private authService: AuthService, private bookService: BookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.getAllBooksOfUser();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  refresh(): void {
    this.stepper.selectedIndex = this.stepper.selectedIndex - 1;
    this.getAllBooksOfUser();
  }

  getAllBooksOfUser(): void {
    this.bookService.getBooksOfAuthor(this.user.email)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.allBookUser = apiResponse;
      });
  }

  getChapters(book: BookPresentation): void {
    this.bookService.getBookChapter(book.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.allChaptersOfBook = apiResponse;
        this.visionChapters = true;
      });
  }

  gotoCreationChapter(bookSelected: BookPresentation): void {
    this.activatedBook = bookSelected;
    of().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.isCreatedChapter = true;
      });

    this.stepper.selectedIndex = 2;
  }

  terminateChapterEdition(evt: any): void {
    this.stepper.selectedIndex = this.stepper.selectedIndex - 2;
    this.activatedBook = null;
    of().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.isCreatedChapter = false;
      });
    this.getChapters(evt);
  }

  stopVisionChapters(): void {
    this.visionChapters = false;
  }

  returnToBookList(): void {
    this.stepper.selectedIndex = 0;
  }

  gotoBook(book: any): void {
    this.router.navigate([`book/` + book.id]);
  }

}
