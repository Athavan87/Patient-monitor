import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneddoctorsComponent } from './assigneddoctors.component';

describe('AssigneddoctorsComponent', () => {
  let component: AssigneddoctorsComponent;
  let fixture: ComponentFixture<AssigneddoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigneddoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigneddoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
