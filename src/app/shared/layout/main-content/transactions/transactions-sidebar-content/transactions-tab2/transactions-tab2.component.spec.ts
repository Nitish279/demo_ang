import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTab2Component } from './transactions-tab2.component';

describe('TransactionsTab2Component', () => {
  let component: TransactionsTab2Component;
  let fixture: ComponentFixture<TransactionsTab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsTab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
