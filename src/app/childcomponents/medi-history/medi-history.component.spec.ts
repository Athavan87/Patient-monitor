import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediHistoryComponent } from './medi-history.component';

describe('MediHistoryComponent', () => {
  let component: MediHistoryComponent;
  let fixture: ComponentFixture<MediHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
