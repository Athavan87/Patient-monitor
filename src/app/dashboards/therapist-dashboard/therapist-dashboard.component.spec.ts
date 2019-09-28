
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TherapistDashboardComponent } from './therapist-dashboard.component';

describe('TherapistDashboardComponent', () => {
  let component: TherapistDashboardComponent;
  let fixture: ComponentFixture<TherapistDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [TherapistDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TherapistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
