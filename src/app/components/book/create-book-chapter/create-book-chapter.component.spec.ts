import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookChapterComponent } from './create-book-chapter.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('CreateBookChapterComponent', () => {
  let component: CreateBookChapterComponent;
  let fixture: ComponentFixture<CreateBookChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookChapterComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [NgxPaginationModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
