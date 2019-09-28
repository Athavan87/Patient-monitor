import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreceptionistComponent } from './viewreceptionist.component';

describe('ViewreceptionistComponent', () => {
  let component: ViewreceptionistComponent;
  let fixture: ComponentFixture<ViewreceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewreceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
