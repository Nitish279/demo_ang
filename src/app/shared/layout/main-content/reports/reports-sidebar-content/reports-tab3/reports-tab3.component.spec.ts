import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsTab3Component } from './reports-tab3.component';

describe('ReportsTab3Component', () => {
  let component: ReportsTab3Component;
  let fixture: ComponentFixture<ReportsTab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsTab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsTab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
