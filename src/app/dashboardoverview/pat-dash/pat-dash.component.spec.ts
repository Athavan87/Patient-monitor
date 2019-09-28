import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatDashComponent } from './pat-dash.component';

describe('PatDashComponent', () => {
  let component: PatDashComponent;
  let fixture: ComponentFixture<PatDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
