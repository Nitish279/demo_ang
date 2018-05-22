import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTab1Component } from './transactions-tab1.component';

describe('TransactionsTab1Component', () => {
  let component: TransactionsTab1Component;
  let fixture: ComponentFixture<TransactionsTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsTab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
