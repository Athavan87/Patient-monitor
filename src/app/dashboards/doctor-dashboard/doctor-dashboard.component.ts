import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginData } from '../../login/login.service';
import { FindData } from '../../childcomponents/find.module';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
  docName;
  assignedPat: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private service: LoginData,
    private serv: FindData) { }
  ngOnInit() {
    this.docName = this.service.D_NAME;
    // console.log("Doctor " + this.service.SendDoctor());
    // this.serv.getAssignDoc(this.docName).subscribe((result) => {
    //   console.log(result.posts.length);
    //   this.assignedPat = result.posts.length;
    // });
  }
}
