import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapDashComponent } from './therap-dash.component';

describe('TherapDashComponent', () => {
  let component: TherapDashComponent;
  let fixture: ComponentFixture<TherapDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
