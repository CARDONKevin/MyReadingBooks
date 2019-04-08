import {Component, OnDestroy, OnInit} from '@angular/core';
import {MangaService} from '../../../services/manga.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';
import {MangaMapper} from '../../../mappers/manga-mapper';
import {map, takeUntil} from 'rxjs/operators';
import {MangaInformation} from '../../../models/mangas/MangaInformation';

@Component({
  selector: 'app-manga-presentation',
  templateUrl: './manga-presentation.component.html',
  styleUrls: ['./manga-presentation.component.scss']
})

export class MangaPresentationComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();
  mangaInfo: MangaInformation;
  mangaId: string;
  found = false;

  constructor(private mangaService: MangaService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.mangaId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
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

}
