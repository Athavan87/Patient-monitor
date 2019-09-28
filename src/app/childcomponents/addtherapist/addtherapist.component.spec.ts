import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtherapistComponent } from './addtherapist.component';

describe('AddtherapistComponent', () => {
  let component: AddtherapistComponent;
  let fixture: ComponentFixture<AddtherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
