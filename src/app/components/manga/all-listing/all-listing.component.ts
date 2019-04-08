import {Component, OnDestroy, OnInit} from '@angular/core';
import {MangaPresentation} from '../../../models/mangas/MangaPresentation';
import {MangaService} from '../../../services/manga.service';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {MangaMapper} from '../../../mappers/manga-mapper';
import {ActivatedRoute, Router} from '@angular/router';
import {MatRadioChange} from '@angular/material';


@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.scss']
})
export class AllListingComponent implements OnInit, OnDestroy {
  mangas: Array<MangaPresentation> = [];
  end: number;
  page: number;
  start: number;
  total: number;
  readonly BASE_URL_IMAGE: string = 'https://cdn.mangaeden.com/mangasimg/';
  readonly numberInPage: number = 25;
  startPage = 0;
  config: any;
  collection = [];
  allMangas = [];
  sort = 'none';

  private ngUnsubscribe = new Subject<void>();


  constructor(private mangaService: MangaService, private route: ActivatedRoute, private router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 2
    };

    this.route.queryParamMap
      .pipe(map(params => params.get('page')))
      .subscribe(page => this.config.currentPage = page);
  }

  ngOnInit() {
    this.ConsultationAllMangas(this.startPage);
    this.config.itemsPerPage = this.numberInPage;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ConsultationAllMangas(beginNumber: number) {
    const mapper = new MangaMapper();
    this.mangaService.getMangasWithPagination(beginNumber, this.numberInPage)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.end = apiResponse.end;
        this.page = apiResponse.page;
        this.start = apiResponse.start;
        this.total = apiResponse.total;
        this.mangas = [];
        apiResponse.manga.forEach(manga => this.mangas.push(mapper.MangaPresentationDtoToDomain(manga)));
        this.mangas.forEach(manga => manga.image = this.BASE_URL_IMAGE + manga.image);
        this.collection = [];
        for (let i = 1; i <= this.total; i++) {
          this.collection.push(`${i}`);
        }
      });
  }

  pageChange(newPage: number) {
    if (this.sort === 'none') {
      this.router.navigate(['mangas'], {queryParams: {page: newPage}});
      const resultPage = newPage - 1;
      this.ConsultationAllMangas(resultPage);
    } else {
      this.sortByTypeSort(this.sort, newPage);
      this.router.navigate([''], {queryParams: {page: newPage}});
    }
  }


  onChange(mrChange: MatRadioChange) {
    this.sort = mrChange.value;
    this.applyChangement(mrChange.value);

  }

  public applyChangement(sort: string): void {
    let pageNumero = 1;
    this.route.queryParamMap
      .pipe(map(params => params.get('page')))
      .subscribe(page => {
          if (page !== null) {
            pageNumero = +page;
            this.config.currentPage = +page;
          }
        }
      );
    this.sortByTypeSort(sort, pageNumero);
  }

  public sortByTypeSort(sort: string, pageNumero: number): void {
    const mapper = new MangaMapper();
    if (this.sort === 'none') {
      this.pageChange(pageNumero);
    } else {
      this.mangaService.getMangas()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(apiResponse => {
          this.mangas = [];
          this.allMangas = [];
          apiResponse.manga.forEach(manga => this.allMangas.push(mapper.MangaPresentationDtoToDomain(manga)));
          this.allMangas.forEach(manga => manga.image = this.BASE_URL_IMAGE + manga.image);
          switch (sort) {
            case 'alpha': {
              this.allMangas.sort((a, b) => {
                const textA = a.title.toUpperCase();
                const textB = b.title.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
              });
              break;
            }
            case 'reversedAlpha' : {
              this.allMangas.sort((a, b) => {
                const textA = a.title.toUpperCase();
                const textB = b.title.toUpperCase();
                return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
              });
              break;
            }
            case 'date': {
              this.allMangas.sort((a, b) => {
                return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
              });
              break;
            }
            case 'reversedDate': {
              this.allMangas.sort((a, b) => {
                return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
              });
              this.allMangas.reverse();
              break;
            }
          }
          for (let i = 25 * (pageNumero - 1); i <= 25 * (pageNumero - 1) + 24; i++) {
            if (i < this.total) {
              this.mangas.push(this.allMangas[i]);
            }
          }
        });
    }
  }

  gotoManga(manga: any): void {
    this.router.navigate([`manga/` + manga.id]);
  }
}
