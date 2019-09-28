import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from '../../login/login.service';
import { LocalStorageService,
         SessionStorageService,
         LocalStorage,
         SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @LocalStorage() SelName = '';
  Dashboard = '';
  AdmName: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router, private service: LoginData) { }
  
  ngOnInit() {
    this.SelName = this.service.SendAdmin();
    console.log("html "+this.SelName);
   }
}
