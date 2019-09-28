import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassignedpatientComponent } from './viewassignedpatient.component';

describe('ViewassignedpatientComponent', () => {
  let component: ViewassignedpatientComponent;
  let fixture: ComponentFixture<ViewassignedpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewassignedpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewassignedpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
