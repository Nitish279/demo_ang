import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSidebarContentComponent } from './reports-sidebar-content.component';

describe('ReportsSidebarContentComponent', () => {
  let component: ReportsSidebarContentComponent;
  let fixture: ComponentFixture<ReportsSidebarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsSidebarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsSidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
