import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MangaPresentationComponent} from './components/manga/manga-presentation/manga-presentation.component';
import {AuthentificationComponent} from './control/authentification/authentification.component';
import {AllListingComponent} from './components/manga/all-listing/all-listing.component';
import {ReadChapterComponent} from './components/manga/read-chapter/read-chapter.component';
import {BookListingComponent} from './components/book/book-listing/book-listing.component';
import {BookChaptersComponent} from './components/book/book-chapters/book-chapters.component';
import {StudioCreationComponent} from './components/studio-creation/studio-creation.component';
import {AuthenticationGuard} from './guards/authentication.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AuthentificationComponent },
  { path: 'mangas', canActivate: [ AuthenticationGuard ], component: AllListingComponent },
  { path: 'manga/:id', canActivate: [ AuthenticationGuard ], component: MangaPresentationComponent },
  { path: 'book/:id', canActivate: [ AuthenticationGuard ], component: BookChaptersComponent },
  { path: 'books', canActivate: [ AuthenticationGuard ], component: BookListingComponent },
  { path: 'chapter/:id', canActivate: [ AuthenticationGuard ], component: ReadChapterComponent },
  { path: 'creation-studio', canActivate: [ AuthenticationGuard ], component: StudioCreationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
