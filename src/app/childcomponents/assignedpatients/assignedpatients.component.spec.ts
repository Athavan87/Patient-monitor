import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedpatientsComponent } from './assignedpatients.component';

describe('AssignedpatientsComponent', () => {
  let component: AssignedpatientsComponent;
  let fixture: ComponentFixture<AssignedpatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedpatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
