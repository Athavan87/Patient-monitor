import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginData } from '../../login/login.service';

@Component({
  selector: 'app-therapist-dashboard',
  templateUrl: './therapist-dashboard.component.html',
  styleUrls: ['./therapist-dashboard.component.css']
})
export class TherapistDashboardComponent implements OnInit {
  therapName;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private service: LoginData) { }
  ngOnInit() {
    this.therapName = this.service.T_NAME;
    console.log(this.therapName);
  }
}
