import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignspldocComponent } from './assignspldoc.component';

describe('AssignspldocComponent', () => {
  let component: AssignspldocComponent;
  let fixture: ComponentFixture<AssignspldocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignspldocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignspldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
