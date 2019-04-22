import {Component, OnDestroy, OnInit} from '@angular/core';
import {MangaPresentation} from '../../../models/mangas/MangaPresentation';
import {MangaService} from '../../../services/manga.service';
import {Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {MangaMapper} from '../../../mappers/manga-mapper';
import {ActivatedRoute, Router} from '@angular/router';
import {MatRadioChange, MatSelectChange} from '@angular/material';

export interface Categories {
  value: string;
  viewValue: string;
}

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
  collectionCategorized = [];
  allMangas = [];
  allCategorizedMangas = [];
  allCategorie: Categories[];
  isDisplayedCategories = false;
  sort = 'none';
  selectedCategorie = ' Aucune';

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
    this.allCategorie = [];
    this.ConsultationAllMangas(this.startPage);
    this.config.itemsPerPage = this.numberInPage;
    this.initializeCategories();
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
    if (this.selectedCategorie.startsWith(' Aucune')) {
      if (this.sort === 'none') {
        this.router.navigate(['mangas'], {queryParams: {page: newPage}});
        const resultPage = newPage - 1;
        this.ConsultationAllMangas(resultPage);
      } else {
        this.sortByTypeSort(this.sort, newPage);
        this.router.navigate(['mangas'], {queryParams: {page: newPage}});
      }
    } else {
      this.router.navigate(['mangas'], {queryParams: {page: newPage}});
      this.sortCategorizedManga(this.sort, newPage);
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
    if (this.selectedCategorie.startsWith( ' Aucune')) {
      this.sortByTypeSort(sort, pageNumero);
    } else {
      this.sortCategorizedManga(sort, pageNumero);
    }
  }

  sortByTypeSort(sort: string, pageNumero: number): void {
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

  initializeCategories(): void {
    this.mangaService.getMangas().pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.mangas.forEach(manga => {
          manga.categories.forEach(categ => {
            if (!this.allCategorie.find(x => x.value === categ)) {
              this.allCategorie.push({value: categ, viewValue: categ} as Categories);
            }
          });
        });
        this.allCategorie.sort((a, b) => {
          const textA = a.value.toUpperCase();
          const textB = b.value.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.isDisplayedCategories = true;
      });
  }

  onSelectedCategorie(selected: MatSelectChange): void {
    this.allCategorizedMangas = [];
    this.selectedCategorie = selected.value;
    this.route.queryParamMap
      .pipe(map(params => params.get('page')))
      .subscribe(page => {
          if (page !== null) {
            this.config.currentPage = +page;
          } else {
            this.config.currentPage = 1;
          }
        }
      );
    this.pageChange(this.config.currentPage);
    console.log(selected.value);
  }

  sortCategorizedManga(sort: string, pageNumero: number): void {
    const mapper = new MangaMapper();
    this.collection = [];
    this.collectionCategorized = [];
    this.mangaService.getMangas()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(apiResponse => {
        this.allCategorizedMangas = [];
        apiResponse.manga.forEach(manga => {
          manga.c.forEach(categ => {
            if (categ === this.selectedCategorie) {
              this.allCategorizedMangas.push(mapper.MangaPresentationDtoToDomain(manga));
            }
          });
        });
        console.log(this.allCategorizedMangas);
        this.allCategorizedMangas.forEach(manga => manga.image = this.BASE_URL_IMAGE + manga.image);
        if (this.sort !== 'none') {
          switch (sort) {
            case 'alpha': {
              this.allCategorizedMangas.sort((a, b) => {
                const textA = a.title.toUpperCase();
                const textB = b.title.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
              });
              break;
            }
            case 'reversedAlpha' : {
              this.allCategorizedMangas.sort((a, b) => {
                const textA = a.title.toUpperCase();
                const textB = b.title.toUpperCase();
                return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
              });
              break;
            }
            case 'date': {
              this.allCategorizedMangas.sort((a, b) => {
                return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
              });
              break;
            }
            case 'reversedDate': {
              this.allCategorizedMangas.sort((a, b) => {
                return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
              });
              this.allCategorizedMangas.reverse();
              break;
            }
          }
        }
        this.mangas = [];
        for (let i = 25 * (pageNumero - 1); i <= 25 * (pageNumero - 1) + 24; i++) {
          if (i < this.allCategorizedMangas.length) {
            this.mangas.push(this.allCategorizedMangas[i]);
          }
        }
        for (let i = 0; i <= this.allCategorizedMangas.length; i++) {
          this.collectionCategorized.push(`${i}`);
        }
      });
  }
}
