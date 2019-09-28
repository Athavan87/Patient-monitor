import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './login.model';
import { Patient } from './patient.model';
import { Doctor } from './doctor.model';
import { Observable } from 'rxjs';
import {
  LocalStorageService,
  SessionStorageService,
  LocalStorage,
  SessionStorage
} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class LoginData implements OnInit {

  @LocalStorage() admname;
  @LocalStorage() doctor;
  @LocalStorage() Patient;
  @LocalStorage() recep;
  @LocalStorage() therap;
  ngOnInit() {
  }

  constructor(private http: HttpClient) {
    // localStorage.clear();
   }
  // tslint:disable-next-line:member-ordering
  private posts: User[] = [];
  // private patient: Patient[] = [];
  addAdmin(uName: string, pwd: string) {
    const admin: User = { Name: uName, Pass: pwd };
    console.log(admin);
    this.http.post<{ msg: string, posts: User[] }>('http://localhost:3333/login', admin)
      .subscribe(responseData => {
        console.log(responseData.msg);
        this.posts.push(admin);
      });
  }
  // Getting Admin
  // tslint:disable-next-line:member-ordering
  @LocalStorage() A_NAME: any;
  getAdmin(un: string, pwd: string) {
    this.admname = un;
    this.http.get<{ msg: string; posts: User[] }>('http://localhost:3333/getLogin/' + un + '/' + pwd)
    .subscribe(res => {
      // localStorage.removeItem(this.A_NAME);
      this.A_NAME = res.posts[0].Name;
    });
    // console.log("Name" +this.admname);
    return this.http.get<{ msg: string; posts: User[] }>('http://localhost:3333/getLogin/' + un + '/' + pwd);
  }
  SendAdmin() {
    // console.log("Send" +this.admname);
    return this.admname;
  }
  // tslint:disable-next-line:member-ordering
  @LocalStorage() P_NAME: any;
  getPatientLogin(un: string, pwd: string) {
    localStorage.removeItem(this.P_NAME);
    this.Patient = un;
    this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getPatientLogin/' + un + '/' + pwd)
      .subscribe(res => {
        this.P_NAME = res.posts[0].fname;
      });
    return this.http.get<{ msg: string; posts: Patient[] }>('http://localhost:3333/getPatientLogin/' + un + '/' + pwd);
  }
  SendPatient() {
    return this.Patient;
  }
  // tslint:disable-next-line:member-ordering
  @LocalStorage() D_NAME: any;
  getDoctorLogin(un: string, pwd: string) {
    localStorage.removeItem(this.D_NAME);
    this.doctor = un;
    console.log(this.doctor);
    this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getDoctorLogin/' + un + '/' + pwd)
      .subscribe(res => {
        this.D_NAME = res.posts[0].fname;
      });
    return this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getDoctorLogin/' + un + '/' + pwd);
  }
  SendDoctor() {
    return this.doctor;
  }
  // tslint:disable-next-line:member-ordering
  @LocalStorage() R_NAME: any;
  getReceLogin(un: string, pwd: string) {
    this.recep = un;
    this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getReceLogin/' + un + '/' + pwd)
      .subscribe(res => {
        localStorage.removeItem(this.R_NAME);
        this.R_NAME = res.posts[0].uname;
      });
    return this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getReceLogin/' + un + '/' + pwd);
  }
  SendReceptionist() {
    return this.recep;
  }
  // tslint:disable-next-line:member-ordering
  @LocalStorage() T_NAME: any;
  getTherapLogin(un: string, pwd: string) {
    this.therap = un;
    this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getTherapLogin/' + un + '/' + pwd)
      .subscribe(res => {
        localStorage.removeItem(this.T_NAME);
        this.T_NAME = res.posts[0].uname;
      });
    return this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getTherapLogin/' + un + '/' + pwd);
  }
  SendTherapist() {
    return this.therap;
  }
}
