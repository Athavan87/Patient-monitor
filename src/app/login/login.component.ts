import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from './login.service';
import { User } from './login.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Msg: String = '';
  private posts: User[] = [];
  constructor(private router: Router, private service: LoginData) {

  }
  // Onclick the login button
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // 1) Getting Admin Login
    this.service.getAdmin(form.value.userName, form.value.pwd).subscribe((res) => {
      if (res.posts.length < 0) {
        this.Msg = 'Username or Password is Incorrect';
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/adm-dash');
      }
    });

    // 2) Getting patient login
    this.service.getPatientLogin(form.value.userName, form.value.pwd).subscribe((res) => {
      if (form.value.userName == res.posts[0].email && form.value.pwd == res.posts[0].pswd) {
        this.router.navigateByUrl('/pat-dash');
      } else {
        this.Msg = 'Username or Password is Incorrect';
        this.router.navigateByUrl('/');
      }
    });

    // 3) Getting Doctor login
    this.service.getDoctorLogin(form.value.userName, form.value.pwd).subscribe((res) => {
      console.log(res.posts[0].pswd);
      if (form.value.userName == res.posts[0].email && form.value.pwd == res.posts[0].pswd) {
        this.router.navigateByUrl('/doc-dash');
      } else {
        this.Msg = 'Username or Password is Incorrect';
        this.router.navigateByUrl('/');
      }
    });

    // 4) Getting receptionist login
    this.service.getReceLogin(form.value.userName, form.value.pwd).subscribe((res) => {
      console.log(res.posts[0].pswd);
      if (form.value.userName == res.posts[0].email && form.value.pwd == res.posts[0].pswd) {
        this.router.navigateByUrl('/recep-dash');
      } else {
        this.Msg = 'Username or Password is Incorrect';
        this.router.navigateByUrl('/');
      }
    });

    //  5) Getting therapist login
    this.service.getTherapLogin(form.value.userName, form.value.pwd).subscribe((res) => {
      console.log(res.posts[0].pswd);
      if (form.value.userName == res.posts[0].email && form.value.pwd == res.posts[0].pswd) {
        this.router.navigateByUrl('/therapy-dash');
      } else {
        this.Msg = 'Username or Password is Incorrect';
        this.router.navigateByUrl('/');
      }
    });

  }
  // Chaging color for error message
  changeCss() {
    if (this.Msg === 'Username or Password is Incorrect') {
      return 'red';
    }
  }
  ngOnInit() {
  }
}
