import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTab2Component } from './reports-tab2.component';

describe('ReportsTab2Component', () => {
  let component: ReportsTab2Component;
  let fixture: ComponentFixture<ReportsTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsTab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
