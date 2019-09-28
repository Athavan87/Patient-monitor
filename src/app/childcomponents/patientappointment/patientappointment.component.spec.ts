import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientappointmentComponent } from './patientappointment.component';

describe('PatientappointmentComponent', () => {
  let component: PatientappointmentComponent;
  let fixture: ComponentFixture<PatientappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
