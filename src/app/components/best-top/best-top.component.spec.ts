import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestTopComponent } from './best-top.component';

describe('BestTopComponent', () => {
  let component: BestTopComponent;
  let fixture: ComponentFixture<BestTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
