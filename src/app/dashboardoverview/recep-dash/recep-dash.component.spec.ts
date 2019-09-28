import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepDashComponent } from './recep-dash.component';

describe('RecepDashComponent', () => {
  let component: RecepDashComponent;
  let fixture: ComponentFixture<RecepDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
