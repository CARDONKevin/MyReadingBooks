import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {BookPresentation} from '../../../models/book/BookPresentation';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookChapters} from '../../../models/book/BookChapters';
import {takeUntil} from 'rxjs/operators';
import {DefinitionOfWordService} from '../../../services/definition-of-word.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentNote} from '../../../models/notation/CommentNote';
import {AuthService, SocialUser} from 'angularx-social-login';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-book-chapters',
  templateUrl: './book-chapters.component.html',
  styleUrls: ['./book-chapters.component.scss']
})
export class BookChaptersComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();
  commentForm: FormGroup;
  comment: CommentNote;
  book: BookPresentation;
  chapters: BookChapters[];
  bookId: string;
  definitionWordApi: any;
  user: SocialUser;
  allComment: CommentNote[];
  displayedColumns: string[] = ['authorName', 'notation', 'comment'];

  constructor(private bookService: BookService, private route: ActivatedRoute,
              private router: Router, private definitionService: DefinitionOfWordService,
              private readonly fb: FormBuilder, private authService: AuthService,
              private commentNoteService: CommentService) {
    this.bookId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
    this.chapters = [];
    const controlsConfig = {
        comment: ['', [Validators.required]],
        note: ['', [Validators.required]],
      };

    this.commentForm = this.fb.group(controlsConfig);
    this.seeBook();
    this.seeChapters();
    this.getComments();
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

  prepareCommentNote(): void {
    const formValues = this.commentForm.getRawValue();

    if (formValues.note > 20) {
      formValues.note = 20;
    }

    if (formValues.note < 0) {
      formValues.note = 0;
    }

    this.comment = {
      comment: formValues.comment,
      notation: formValues.note,
      typeOfBook: 'book',
      idBook: this.book.id.toString(),
      authorMail: this.user.email,
      authorName: this.user.name,
    } as CommentNote;
    this.commentNoteService.postComment(this.comment)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.getComments();
      });
  }

  getComments(): void {
    this.commentNoteService.getCommentOfTypeOfMangaIdOrBookId('book', this.bookId)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.allComment = apiResponse;
      });
  }

}
