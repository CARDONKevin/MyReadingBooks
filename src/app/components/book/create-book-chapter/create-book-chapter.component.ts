import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'angularx-social-login';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {Subject} from 'rxjs';
import {BookPresentation} from '../../../models/book/BookPresentation';

@Component({
  selector: 'app-create-book-chapter',
  templateUrl: './create-book-chapter.component.html',
  styleUrls: ['./create-book-chapter.component.scss']
})
export class CreateBookChapterComponent implements OnInit, OnDestroy {

  chapterCreationForm: FormGroup;
  chapter: any;
  private ngUnsubscribe = new Subject<void>();

  @Input() bookId: BookPresentation;

  @Output()
  readonly terminateChapterCreation = new EventEmitter<any>();

  constructor(private readonly fb: FormBuilder, private authService: AuthService,
              private route: ActivatedRoute, private router: Router, private bookService: BookService) {
  }

  ngOnInit() {
    const controlsConfig = {
      title: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      content: ['', [Validators.required]],
    };

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
}
