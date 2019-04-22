import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllListingComponent } from './components/manga/all-listing/all-listing.component';
import {MangaService} from './services/manga.service';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule, MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import {FacebookLoginProvider} from 'angularx-social-login';
import { AuthentificationComponent } from './control/authentification/authentification.component';
import { MangaPresentationComponent } from './components/manga/manga-presentation/manga-presentation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReadChapterComponent } from './components/manga/read-chapter/read-chapter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookListingComponent } from './components/book/book-listing/book-listing.component';
import { BookChaptersComponent } from './components/book/book-chapters/book-chapters.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { CreateBookChapterComponent } from './components/book/create-book-chapter/create-book-chapter.component';
import { StudioCreationComponent } from './components/studio-creation/studio-creation.component';


const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('370545117128079')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AllListingComponent,
    AuthentificationComponent,
    MangaPresentationComponent,
    SidebarComponent,
    ReadChapterComponent,
    BookListingComponent,
    BookChaptersComponent,
    CreateBookComponent,
    CreateBookChapterComponent,
    StudioCreationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [MangaService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
