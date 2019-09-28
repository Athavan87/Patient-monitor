import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmDashComponent } from './adm-dash.component';

describe('AdmDashComponent', () => {
  let component: AdmDashComponent;
  let fixture: ComponentFixture<AdmDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
