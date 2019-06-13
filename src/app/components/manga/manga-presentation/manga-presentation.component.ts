import {Component, OnDestroy, OnInit} from '@angular/core';
import {MangaService} from '../../../services/manga.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';
import {MangaMapper} from '../../../mappers/manga-mapper';
import {map, takeUntil} from 'rxjs/operators';
import {MangaInformation} from '../../../models/mangas/MangaInformation';
import {CommentNote} from '../../../models/notation/CommentNote';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService, SocialUser} from 'angularx-social-login';
import {CommentService} from '../../../services/comment.service';

@Component({
  selector: 'app-manga-presentation',
  templateUrl: './manga-presentation.component.html',
  styleUrls: ['./manga-presentation.component.scss']
})

export class MangaPresentationComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();
  mangaInfo: MangaInformation;
  comment: CommentNote;
  mangaId: string;
  found = false;
  user: SocialUser;
  commentForm: FormGroup;

  constructor(private mangaService: MangaService, private route: ActivatedRoute,
              private router: Router, private location: Location,
              private readonly fb: FormBuilder, private authService: AuthService,
              private commentNoteService: CommentService) {
    this.mangaId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
    const controlsConfig = {
      comment: ['', [Validators.required]],
      note: ['', [Validators.required]],
    };

    this.commentForm = this.fb.group(controlsConfig);
    this.seeInformationOfManga(this.mangaId);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  seeInformationOfManga(id: string): void {
    const mapper = new MangaMapper();
    this.mangaService.getMangaInformation(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.mangaInfo = mapper.MangaInformationDtoToDomain(apiResponse);
        this.found = true;
      });
  }

  goBack(): void {
    this.location.back();
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
      typeOfBook: 'manga',
      idBook: this.mangaId,
      authorMail: this.user.email,
      authorName: this.user.name,
    } as CommentNote;
    this.commentNoteService.postComment(this.comment)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        // action
      });
  }

}
