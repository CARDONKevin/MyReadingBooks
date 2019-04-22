import {Component, OnDestroy, OnInit} from '@angular/core';
import {MangaMapper} from '../../../mappers/manga-mapper';
import {takeUntil} from 'rxjs/operators';
import {MangaService} from '../../../services/manga.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';
import {MangaChapterDto} from '../../../models/mangas/dto/MangaChapterDto';

@Component({
  selector: 'app-read-chapter',
  templateUrl: './read-chapter.component.html',
  styleUrls: ['./read-chapter.component.scss']
})
export class ReadChapterComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();
  chapterId: string;
  chapter: MangaChapterDto;
  found = false;

  constructor(private mangaService: MangaService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.chapterId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.seeChapter(this.chapterId);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  seeChapter(id: string): void {
    this.mangaService.getMangaChapter(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.chapter = apiResponse;
        this.chapter.images.reverse();

        this.found = true;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
