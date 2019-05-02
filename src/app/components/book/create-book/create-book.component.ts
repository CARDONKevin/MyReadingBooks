import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {AuthService, SocialUser} from 'angularx-social-login';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {takeUntil} from 'rxjs/operators';
import {BookPresentation} from '../../../models/book/BookPresentation';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit, OnDestroy {

  userCreationForm: FormGroup;
  private ngUnsubscribe = new Subject<void>();
  book: any;
  user: SocialUser;

  @Input() bookExist?: BookPresentation;

  @Output()
  readonly refreshEvent = new EventEmitter<void>();


  constructor(private readonly fb: FormBuilder, private authService: AuthService,
              private route: ActivatedRoute, private router: Router, private bookService: BookService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
    const controlsConfig = !this.bookExist ? {
      title: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      picture: ['', [Validators.required]],
    }
    :
      {
        title: [this.bookExist.title, [Validators.required]],
        categorie: [this.bookExist.categorie, [Validators.required]],
        picture: [this.bookExist.picture, [Validators.required]],
      }
    ;

    this.userCreationForm = this.fb.group(controlsConfig);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  prepareBook(): void {
    const formValues = this.userCreationForm.getRawValue();
    this.book = {
      author: this.user.name,
      authorMail: this.user.email,
      title: formValues.title,
      picture: formValues.picture,
      categorie: formValues.categorie,
      creationDate: Date.now(),
    };
    this.bookService.postBook(this.book)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.refreshParent();
      });
  }

  editBook(): void {
    const formValues = this.userCreationForm.getRawValue();
    this.book = {
      author: this.user.name,
      authorMail: this.user.email,
      title: formValues.title,
      picture: formValues.picture,
      categorie: formValues.categorie,
      creationDate: Date.now(),
    };

    this.bookService.editBook(this.book, this.bookExist.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.refreshParent();
      });
  }

  refreshParent(): void {
    this.refreshEvent.emit();
  }
}
