import { AddDoc } from './model.type';
import { AddPatient } from './model.type';
import { AddRec } from './model.type';
import { AddTherap } from './model.type';
// import { AddAppoint } from './model.type';
import { Prescription } from './model.type';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  LocalStorageService,
  SessionStorageService,
  LocalStorage,
  SessionStorage
} from 'angular-web-storage';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Local } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})

export class FindData {
  constructor(private http: HttpClient/*, @Inject(SESSION_STORAGE) private storage: StorageService*/) {
    // localStorage.clear();
  }

  private doctors: AddDoc[] = [];
  private editDoc: AddDoc[] = [];
  private patient: AddPatient[] = [];
  num: any;
  cou: any;
  @LocalStorage() docCount: any;
  @LocalStorage() patCount: any;
  @LocalStorage() recCount: any;
  @LocalStorage() therapCount: any;
  @LocalStorage() prescCount: any;
  @LocalStorage() medCount: any;
  @LocalStorage() asiPatCount: any;
  @LocalStorage() asiDocCount: any;
  @LocalStorage() P_Id: any;
  @LocalStorage() P_NAME: any;
  @LocalStorage() D_Id: any;
  @LocalStorage() D_NAME: any;
  // Getting Doctors
  getDoctors() {
    this.http.get<{ msg: string; posts: AddDoc[] }>('http://localhost:3333/getdoctor')
      .subscribe(res => {
        this.docCount = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: AddDoc[] }>('http://localhost:3333/getdoctor');
  }
  // For Viewwing purpose
  viewDoctors(ele: AddDoc[], count) {
    // alert(ele[0].email);
    this.doctors = ele;
    this.num = count;
  }
  GetDoc(eml) {
    console.log('this is ' + eml);
    return this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getdoc/' + eml);
  }
  deleteDoc(id) {
    console.log(id);
    const val = "hello";
    return this.http.put<{ msg: string; posts: any }>('http://localhost:3333/uptdoc/' + id, val);
  }
  // For editing Purpose
  editDoctors(ele: any, count) {
    // alert(ele[0].email);
    this.editDoc = ele;
    this.cou = count;
  }
  EditDoc(eml) {
    console.log('this is ' + eml);
    return this.http.get<{ msg: string; posts: AddDoc[] }>('http://localhost:3333/editdoc/' + eml);
  }
  // Getting Patients
  getPatients() {
    this.http.get<{ msg: string; posts: AddPatient[] }>('http://localhost:3333/getpatient')
      .subscribe(res => {
        this.patCount = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: AddPatient[] }>('http://localhost:3333/getpatient');
  }

  getPatient(name) {
    console.log(name);
    return this.http.get<{ msg: string; posts: AddPatient[] }>('http://localhost:3333/getpatientforapp/'+name);
  }

  getPatientName(id) {
    return this.http.get<{ msg: string; posts: AddPatient[] }>('http://localhost:3333/getpatientname/'+id);
  }
  viewPatients(ele: AddPatient[], count) {
    // alert(ele[0].email);
    this.patient = ele;
    this.num = count;
  }

  UpdateSplDoc(id: any, spcldoc: any) {
    console.log("Service file: " + id + " " + spcldoc);
    var arr = {
      Id : id,
      Sl: spcldoc
    }
    return this.http.put<{ msg: string; posts: any }>('http://localhost:3333/uptspldoc', arr);
  }

  // Getting Assigned Doctors
  getAssignDoc(eml) {
    this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getassigndoc/' + eml)
      .subscribe(res => {
        this.asiPatCount = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getassigndoc/' + eml);
  }
  getAssignPat(eml) {
    this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getassignpat/' + eml)
      .subscribe(res => {
        this.asiDocCount = res.posts.length;
        console.log(this.asiDocCount);
      });
    return this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getassignpat/' + eml);
  }
  // Getting receptionist
  getreceptionist() {
    this.http.get<{ msg: string; posts: AddRec[] }>('http://localhost:3333/getreceptionist')
      .subscribe(res => {
        this.recCount = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: AddRec[] }>('http://localhost:3333/getreceptionist');
  }

  // Getting therapist
  therapist() {
    this.http.get<{ msg: string; posts: AddTherap[] }>('http://localhost:3333/gettherapist')
      .subscribe(res => {
        this.therapCount = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: AddTherap[] }>('http://localhost:3333/gettherapist');
  }

  // Getting therapist
  appointlist() {
    return this.http.get<{ msg: string; posts: any[] }>('http://localhost:3333/getappointlist');
  }

  // Getting assigned patient
  getAsPatient(id) {
    return this.http.get<{ msg: string; posts: any }>('http://localhost:3333/getAsPatient/' + id);
  }

  // Getting random vitals
  getVitals() {
    // var name = {
    //   bodytemp: 98,
    //   pulse: 66,
    //   resp: 13,
    //   bloodpre: 90
    // }
    return this.http.get<{ msg: string; pos: any }>('http://localhost:3333/getvitals');
  }

  getPatientRole(id) {
    return this.http.get<{ msg: string; posts: AddPatient[] }>('http://localhost:3333/getpatrole/' + id);
  }

  addPresc(pname: string, pid: string,
    pemail: string, bloodpres: number,
    dname: string, did: string, dmail: string,
    presdate: Date, mtype: string, ins: string) {
    const presc: Prescription = {
      patName: pname,
      patId: pid,
      patEmail: pemail,
      bloodPresure: bloodpres,
      docName: dname,
      docId: did,
      docEmail: dmail,
      presDate: presdate,
      mtype: mtype,
      ins: ins
    }
    // console.log(presc);
    return this.http.post<{ msg: string; posts: Prescription[] }>('http://localhost:3333/addPresc', presc);
  }

  // Getting all prescriptions to show
  @LocalStorage() prescLength: number;
  getPrescription() {
    this.http.get<{ msg: string; posts: Prescription[] }>('http://localhost:3333/getPresc')
      .subscribe(res => {
        this.prescLength = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: Prescription[] }>('http://localhost:3333/getPresc');
  }
  @LocalStorage() PrescByDoc: number;
  getPrescForDoc(email) {
    console.log("name: " + email);
    this.http.get<{ msg: string; posts: Prescription[] }>('http://localhost:3333/getPrescforDoc/' + email)
      .subscribe(res => {
        this.PrescByDoc = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: Prescription[] }>('http://localhost:3333/getPrescforDoc/' + email);
  }

  @LocalStorage() PrescForPat: number;
  getPrescForPat(email) {
    console.log("name: " + email);
    this.http.get<{ msg: string; posts: Prescription[] }>('http://localhost:3333/getPrescforPat/' + email)
      .subscribe(res => {
        this.PrescForPat = res.posts.length;
      });
    return this.http.get<{ msg: string; posts: Prescription[] }>('http://localhost:3333/getPrescforPat/' + email);
  }

  @LocalStorage() patEmail;
  @LocalStorage() doctorEmail;
  @LocalStorage() bloodPresure;
  SavePresc(email: any, docEm: any, bloodPres: any) {
    this.patEmail = email;
    this.doctorEmail = docEm;
    this.bloodPresure = bloodPres;
  }
  // Get patient for prescription
  getPat(ema) {
    this.http.get<{ msg: string; posts: AddPatient[] }>('http://localhost:3333/getpatient/' + ema)
      .subscribe(res => {
        this.P_Id = res.posts[0].pid;
        this.P_NAME = res.posts[0].fname + " " + res.posts[0].lname;
      });
    return this.http.get<{ msg: string; posts: AddPatient[] }>('http://localhost:3333/getpatient/' + ema);
  }
  // Get doctor for prescription
  GetDoc2(eml) {
    console.log('this is ' + eml);
    this.http.get<{ msg: string; posts: AddDoc[] }>('http://localhost:3333/getdoc2/' + eml)
      .subscribe(res => {
        this.D_Id = res.posts[0].docid;
        this.D_NAME = res.posts[0].fname + " " + res.posts[0].lname;
      });
    return this.http.get<{ msg: string; posts: AddDoc[] }>('http://localhost:3333/getdoc2/' + eml);
  }

  getBookingSchema(id,date) {
    return this.http.get<{ msg: string; post: any }>('http://localhost:3333/getslot/'+ id+'/'+date);
  }

  updateSlot(details: any) {
    // console.log(details);
    return this.http.post<{ msg: string; posts: any }>(`http://localhost:3333/uptslot`, details);
  }
  // updateSlot1(details: any) {
  //   console.log(details);
  //   return this.http.post<{ msg: string; posts: any }>(`http://localhost:3333/uptslot1`, details);
  // }
  // updateSlot2(details: any) {
  //   console.log(details);
  //   return this.http.post<{ msg: string; posts: any }>(`http://localhost:3333/uptslot2`, details);
  // }
  // updateSlot3(details: any) {
  //   console.log(details);
  //   return this.http.post<{ msg: string; posts: any }>(`http://localhost:3333/uptslot3`, details);
  // }

}
