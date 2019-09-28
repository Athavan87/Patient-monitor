import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientprescComponent } from './patientpresc.component';

describe('PatientprescComponent', () => {
  let component: PatientprescComponent;
  let fixture: ComponentFixture<PatientprescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientprescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientprescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
