import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {AuthService, SocialUser} from 'angularx-social-login';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {takeUntil} from 'rxjs/operators';

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

  @Output()
  readonly refreshEvent = new EventEmitter<void>();


  constructor(private readonly fb: FormBuilder, private authService: AuthService,
              private route: ActivatedRoute, private router: Router, private bookService: BookService) {
  }

  ngOnInit() {

    this.authService.authState.subscribe((user) => {
      this.user = user;
    });

    const controlsConfig = {
      title: ['', [Validators.required]],
      categorie: ['', [Validators.required]],
      picture: ['', [Validators.required]],
    };

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

    console.log(this.book);

    this.bookService.postBook(this.book)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
          // book is register and api response is data of book
      });

    this.refreshParent();
  }

  refreshParent(): void {
    this.refreshEvent.emit();
  }
}
