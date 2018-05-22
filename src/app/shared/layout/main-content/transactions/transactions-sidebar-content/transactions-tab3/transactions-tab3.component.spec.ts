import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTab3Component } from './transactions-tab3.component';

describe('TransactionsTab3Component', () => {
  let component: TransactionsTab3Component;
  let fixture: ComponentFixture<TransactionsTab3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsTab3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
