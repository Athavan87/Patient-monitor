export interface SpecialDoc {
  value: string;
}
export interface Slots {
  value: string;
}
export interface PatientNames {
  value: string;
}
export interface PatientId {
  value: string;
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddService } from '../child.service';
import { FindData } from '../find.module';
import { Router } from '@angular/router';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.css']
})
export class PatientappointmentComponent implements OnInit {
  SpclDocList: SpecialDoc[] = [];
  DocList = [];
  display = 'none';
  Msg: string = '';
  constructor(private service: AddService, private finddata: FindData,
    private router: Router) { }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  slotArray: Slots[] = [
    { value: '09:00am to 09:30am' },
    { value: '09:30am to 10:00am' },
    { value: '10:00am to 10:30am' },
    { value: '10:30am to 11:00am' },
    { value: '11:00am to 11:30am' },
    { value: '11:30am to 12:00am' },
    { value: '02:00pm to 02:30pm' },
    { value: '02:30pm to 03:00pm' },
  ];
  availSlot = [];
  showSlot = [];
  DiffSlot: Slots[] = [];
  patName = '';
  patProb = '';
  patStatus = '';
  docName = '';
  patientId: PatientId[] = [];


  getPat(val) {
    this.patientId = [];
    this.docName = '';
    this.docName = val;
    this.finddata.getPatient(val).subscribe(res => {
      res.posts.forEach((names, index) => {
        this.patientId.push({ value: names.pid });
      })
    });
  }


  patId(val) {
    this.patName = '';
    this.patProb = '';
    this.patStatus = '';
    this.finddata.getPatientName(val).subscribe(res => {
      res.posts.forEach((names, index) => {
        console.log(names.email);
        this.patName = names.fname + " " + names.lname;
        this.patProb = names.aildet;
        this.patStatus = names.status;
      })
    });
  }


  slots(val) {
    alert(val);
  }

  checkTime(dat) {
    // alert('checking time');
    console.log(dat + this.docName);
    const bookDate = new Date(dat);
    this.DocList.forEach((res, index) => {
      if (res.fname == this.docName) {
        // console.log(res);
        let DayArray = [];
        DayArray.push(res.timeSchedule[0].dayofWeek[0].sunDay);
        DayArray.push(res.timeSchedule[0].dayofWeek[0].monDay);
        DayArray.push(res.timeSchedule[0].dayofWeek[0].tuesDay);
        DayArray.push(res.timeSchedule[0].dayofWeek[0].wednessDay);
        DayArray.push(res.timeSchedule[0].dayofWeek[0].thursDay);
        DayArray.push(res.timeSchedule[0].dayofWeek[0].friDay);
        DayArray.push(res.timeSchedule[0].dayofWeek[0].saturDay);
        console.log(DayArray);
        for (var j = 0; j < DayArray.length; j++) {
          if (j === bookDate.getDay()) {
            if (DayArray[j] == true) {
              this.availSlot = [];
              this.showSlot = [];
              this.finddata.getBookingSchema(this.docName, dat).subscribe(res => {
                // console.log(res.post);
                res.post.forEach((result, index) => {
                  // console.log(result.time);
                  this.availSlot.push(result.time);
                });
                if (this.availSlot.length == 0) {
                  this.DiffSlot = [];
                  this.DiffSlot = this.slotArray;
                } else {
                  this.showSlot = [];
                  var a = [], diff = [];
                  this.DiffSlot = [];
                  for (var i = 0; i < this.availSlot.length; i++) {
                    a[this.availSlot[i]] = true;
                  }
                  for (var i = 0; i < this.slotArray.length; i++) {
                    if (a[this.slotArray[i].value]) {
                      delete a[this.slotArray[i].value];
                    } else {
                      a[this.slotArray[i].value] = true;
                    }
                  }
                  for (var k in a) {
                    diff.push(k);
                    this.DiffSlot.push({ value: k });
                  }

                  // for(var i=0; i<this.slotArray.length; i++) {
                  //   for(var k=0; k<this.availSlot.length; k++){
                  //     if(this.slotArray[i].value != this.availSlot[k].value) {
                  //       console.log(this.slotArray[i].value);
                  //       this.showSlot.push({ value: this.slotArray[i].value });
                  //     }
                  //   }                    
                  // }
                }
              });
            }
            else {
              alert('Doctor Not Available try another day');
            }
          }
        }
      }
    });
  }
  onSave(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const bookDate = new Date(form.value.appdate);
    const bookingDate = `ISODate("${form.value.appdate}T00:00:00Z")`;
    // console.log(`ISODate("${form.value.appdate}T00:00:00Z")`);
    // console.log(form.value.dname);
    // console.log(form.value.pname);
    // console.log(form.value.pid);
    // console.log(form.value.status);
    // console.log(form.value.prbm);
    // console.log(form.value.appdate);
    // console.log(form.value.slot);
    var appdet = {
      Dname: form.value.dname,
      Pname: form.value.pname,
      Pid: form.value.pid,
      Appdate: form.value.appdate,
      Status: form.value.status,
      Problem: form.value.prbm,
      Time: form.value.slot
    }
    // console.log(appdet);
    this.finddata.updateSlot(appdet).subscribe(re => {
      console.log('updated');
    });
    this.openModal();
  }

  ngOnInit() {
    this.finddata.getDoctors().subscribe(res => {
      this.SpclDocList = [];
      this.DocList = [];
      res.posts.forEach((result, index) => {
        if (res.posts[index].spliz != 'General') {
          // console.log(result);
          this.DocList.push(res.posts[index]);
          // Doctor list for drop down
          this.SpclDocList.push({ value: res.posts[index].fname });
        }
      });
    });
  }
}