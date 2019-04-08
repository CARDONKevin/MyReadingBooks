import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MangaPresentationComponent} from './components/manga/manga-presentation/manga-presentation.component';
import {AuthentificationComponent} from './control/authentification/authentification.component';
import {AllListingComponent} from './components/manga/all-listing/all-listing.component';
import {ReadChapterComponent} from './components/manga/read-chapter/read-chapter.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AuthentificationComponent },
  { path: 'mangas', component: AllListingComponent },
  { path: 'manga/:id', component: MangaPresentationComponent },
  { path: 'chapter/:id', component: ReadChapterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
