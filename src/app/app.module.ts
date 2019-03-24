import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllListingComponent } from './components/manga/all-listing/all-listing.component';
import {MangaService} from './services/manga.service';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule, MatRadioModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AllListingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatRadioModule
  ],
  providers: [MangaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
