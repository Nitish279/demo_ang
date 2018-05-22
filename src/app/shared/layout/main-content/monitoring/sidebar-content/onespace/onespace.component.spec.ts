import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnespaceComponent } from './onespace.component';

describe('OnespaceComponent', () => {
  let component: OnespaceComponent;
  let fixture: ComponentFixture<OnespaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnespaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
