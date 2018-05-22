import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSidebarComponent } from './transactions-sidebar.component';

describe('TransactionsSidebarComponent', () => {
  let component: TransactionsSidebarComponent;
  let fixture: ComponentFixture<TransactionsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
