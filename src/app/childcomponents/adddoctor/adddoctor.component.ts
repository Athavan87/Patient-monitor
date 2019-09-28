export interface Blood {
  value: string;
  viewValue: string;
}

import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddService } from '../child.service';
import { Location } from '@angular/common';
import * as $ from 'jquery';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
declare var $: any;
import { FindData } from '../find.module';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Timestamp } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})


export class AdddoctorComponent implements OnInit {
  checked = false;  checked1 = false; checked2 = false; 
  checked3 = false; checked4 = false; checked5 = false; 
  checked6 = false;
  constructor(private service: AddService,
    private router: Router,
    private _location: Location,
    private findData: FindData) { }
  display = 'none';
  name = '';
  text = 'Doc';
  possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  bloods: Blood[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'O+', viewValue: 'O+' },
    { value: 'O-', viewValue: 'O-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB-', viewValue: 'AB-' }
  ];

  Stime: Blood[] = [
    { value: '08:00 am', viewValue: '08:00 am' },
    { value: '09:00 am', viewValue: '09:00 am' },
    { value: '10:00 am', viewValue: '10:00 am' },
    { value: '11:00 am', viewValue: '11:00 am' },
    { value: '12:00 pm', viewValue: '12:00 pm' }
  ];
  Etime: Blood[] = [
    { value: '12:00 pm', viewValue: '12:00 pm' },
    { value: '01:00 pm', viewValue: '01:00 pm' },
    { value: '02:00 pm', viewValue: '02:00 pm' },
    { value: '03:00 pm', viewValue: '03:00 pm' },
    { value: '04:00 pm', viewValue: '04:00 pm' }
  ];
  openModal(form: NgForm) {
    this.display = 'block';
    this.name = `${form.value.fn}${form.value.ln}`;
  }
  onCloseHandled() {
    this.display = 'none';
  }
  fun() {
    for (var i = 0; i < 10; i++)
      this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    console.log(this.text);
  }
  onSave(form: NgForm) {
    console.log("sun " + form.value.sun + " mon " + form.value.mon + " tue " + form.value.tue +
      " wed " + form.value.wed + " thu " + form.value.thur + " fri " + form.value.fri + " sat " + form.value.sat);
    console.log("start " + form.value.stime + " Etime " + form.value.etime)
    if (form.invalid) {
      return;
    }
    for (var i = 0; i < 7; i++)
      this.text += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    console.log(this.text);
    this.service.AddDoctor(
      form.value.fn,
      form.value.ln,
      form.value.email,
      this.text,
      form.value.pwd,
      form.value.addr,
      form.value.phone,
      form.value.spl,
      form.value.ailcat,
      form.value.blood,
      form.value.dob,
      form.value.emcon,
      form.value.gen,
      form.value.dstat,
      form.value.sun,
      form.value.mon,
      form.value.tue,
      form.value.wed,
      form.value.thur,
      form.value.fri,
      form.value.sat,
      form.value.stime,
      form.value.etime
    );
    this.openModal(form);
  }
  onChangeCss() {
    // $('#update').css('visibility', 'visible');
    alert('hello');
  }
  ngOnInit() {
    // console.log(this.findData.sendData());
    // this.fun();
  }

}
