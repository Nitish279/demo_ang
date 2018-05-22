import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSidebarComponent } from './reports-sidebar.component';

describe('ReportsSidebarComponent', () => {
  let component: ReportsSidebarComponent;
  let fixture: ComponentFixture<ReportsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
