import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsSidebarContentComponent } from './transactions-sidebar-content.component';

describe('TransactionsSidebarContentComponent', () => {
  let component: TransactionsSidebarContentComponent;
  let fixture: ComponentFixture<TransactionsSidebarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsSidebarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
