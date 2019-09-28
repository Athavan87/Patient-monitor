import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetvitalsComponent } from './getvitals.component';

describe('GetvitalsComponent', () => {
  let component: GetvitalsComponent;
  let fixture: ComponentFixture<GetvitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetvitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetvitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
