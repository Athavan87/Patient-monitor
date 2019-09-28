import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtherapistComponent } from './viewtherapist.component';

describe('ViewtherapistComponent', () => {
  let component: ViewtherapistComponent;
  let fixture: ComponentFixture<ViewtherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
