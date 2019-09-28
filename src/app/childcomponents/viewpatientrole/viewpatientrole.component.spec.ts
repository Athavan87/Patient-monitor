import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientroleComponent } from './viewpatientrole.component';

describe('ViewpatientroleComponent', () => {
  let component: ViewpatientroleComponent;
  let fixture: ComponentFixture<ViewpatientroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpatientroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpatientroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
