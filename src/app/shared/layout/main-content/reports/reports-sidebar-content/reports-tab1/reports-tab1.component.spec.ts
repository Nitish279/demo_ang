import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTab1Component } from './reports-tab1.component';

describe('ReportsTab1Component', () => {
  let component: ReportsTab1Component;
  let fixture: ComponentFixture<ReportsTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsTab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
