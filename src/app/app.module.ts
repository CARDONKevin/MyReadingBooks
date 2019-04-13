import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllListingComponent } from './components/manga/all-listing/all-listing.component';
import {MangaService} from './services/manga.service';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule, MatRadioModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import {FacebookLoginProvider} from 'angularx-social-login';
import { AuthentificationComponent } from './control/authentification/authentification.component';
import { MangaPresentationComponent } from './components/manga/manga-presentation/manga-presentation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReadChapterComponent } from './components/manga/read-chapter/read-chapter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    ReadChapterComponent
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
    SocialLoginModule
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
