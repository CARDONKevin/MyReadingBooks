import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'angularx-social-login';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {Subject} from 'rxjs';
import {BookPresentation} from '../../../models/book/BookPresentation';
import {BookChapters} from '../../../models/book/BookChapters';
import {
  RxSpeechRecognitionService,
  resultList,
} from '@kamiazya/ngx-speech-recognition';

@Component({
  selector: 'app-create-book-chapter',
  templateUrl: './create-book-chapter.component.html',
  styleUrls: ['./create-book-chapter.component.scss'],
  providers: [
    RxSpeechRecognitionService,
  ],
})
export class CreateBookChapterComponent implements OnInit, OnDestroy {

  chapterCreationForm: FormGroup;
  chapter: any;
  private ngUnsubscribe = new Subject<void>();
  message = '';
  title = '';
  completeMessage = '';

  @Input() bookId: BookPresentation;

  @Input() chapterExist?: BookChapters;

  @Output()
  readonly terminateChapterCreation = new EventEmitter<any>();

  @Output()
  readonly terminateChapterEdition = new EventEmitter<any>();

  constructor(public service: RxSpeechRecognitionService,
              private readonly fb: FormBuilder, private authService: AuthService,
              private route: ActivatedRoute, private router: Router, private bookService: BookService) {
  }

  ngOnInit() {
    const controlsConfig = !this.chapterExist ? {
      title: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      content: ['', [Validators.required]],
    }
    :
      {
        title: [this.chapterExist.title, [Validators.required]],
        picture: [this.chapterExist.picture, [Validators.required]],
        content: [this.chapterExist.content, [Validators.required]],
      }
    ;
    this.title = this.chapterExist ? this.chapterExist.title : '';
    this.completeMessage = this.chapterExist ? this.chapterExist.content : '';

    this.chapterCreationForm = this.fb.group(controlsConfig);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  prepareBookChapter(): void {
    const formValues = this.chapterCreationForm.getRawValue();
    this.chapter = {
      title: formValues.title,
      picture: formValues.picture,
      content: formValues.content,
      creationDate: Date.now(),
      bookId: this.bookId.id
    };

    this.bookService.postChapter(this.chapter)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        // book is register and api response is data of book
      });

    this.terminateChapterCreation.emit(this.bookId);
  }

  editBookChapterSave(): void {
    const formValues = this.chapterCreationForm.getRawValue();
    this.chapter = {
      title: formValues.title,
      picture: formValues.picture,
      content: formValues.content,
      creationDate: Date.now(),
      bookId: this.bookId.id
    };

    this.bookService.editBookChapter(this.chapter, this.chapterExist.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.terminateChapterEdition.emit(this.bookId);
      });
  }

  listen() {
    this.service
      .listen()
      .pipe(resultList)
      .subscribe((list: SpeechRecognitionResultList) => {
        this.message = list.item(0).item(0).transcript;
        this.completeMessage = this.completeMessage + ' ' +  (' ' + this.message).slice(1);
      });
  }

  listenTitle() {
    this.service
      .listen()
      .pipe(resultList)
      .subscribe((list: SpeechRecognitionResultList) => {
        this.title = list.item(0).item(0).transcript;
      });
  }
}
