
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReceptionDashboardComponent } from './reception-dashboard.component';

describe('ReceptionDashboardComponent', () => {
  let component: ReceptionDashboardComponent;
  let fixture: ComponentFixture<ReceptionDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [ReceptionDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
