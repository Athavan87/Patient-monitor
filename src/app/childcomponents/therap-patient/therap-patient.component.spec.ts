import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapPatientComponent } from './therap-patient.component';

describe('TherapPatientComponent', () => {
  let component: TherapPatientComponent;
  let fixture: ComponentFixture<TherapPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
