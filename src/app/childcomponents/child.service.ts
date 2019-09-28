// Needed imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddDoc } from './model.type';
import { AddPatient } from './model.type';
import { AddRec } from './model.type';
import { AddTherap } from './model.type';
import { AddAppoint } from './model.type';
import { AssignDoctor } from './model.type';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  constructor(private http: HttpClient) {
  }
  private data: AddDoc[] = [];
  private patdata: AddPatient[] = [];
  private recdata: AddRec[] = [];
  // private appdata: AddAppoint[] = [];
  private doctorAssign: AssignDoctor[] = [];

  // Adding Doctor
  AddDoctor(fname: string, lname: string, email: string,
    docid: string, pswd: string, address: string, phone: number,
    spliz: string, ailcat: string, blood: string, dob: Date, emcon: number,
    gend: string, status: string, sunday: boolean, monday: boolean, tuesday: boolean,
    wednessday: boolean, thursday: boolean, friday: boolean, saturday: boolean,
    stime: string, etime: string) {
    const addDoc: AddDoc = {
      fname: fname,
      lname: lname,
      email: email,
      docid: docid,
      pswd: pswd,
      address: address,
      phone: phone,
      spliz: spliz,
      ailcat: ailcat,
      sunDay: sunday,
      monDay: monday,
      tuesDay: tuesday,
      wednessDay: wednessday,
      thursDay: thursday,
      friDay: friday,
      saturDay: saturday,
      startTime: stime,
      endTime: etime,
      blood: blood,
      dob: dob,
      emcon: emcon,
      gender: gend,
      status: status
    };
    this.http.post<{ msg: string, detail: AddDoc[] }>('http://localhost:3333/adddoc', addDoc)
      .subscribe(returnData => {
        console.log(returnData.msg);
        console.log(returnData.detail);
        this.data.push(addDoc);
      });
  }

  // Adding patient
  AddPatient(fname: string, lname: string, pid: string, age: number, phone: number,
    email: string, pswd: string, address: string, attname: string, attphone: number,
    ailcat: string, ailcat2: string, ailcat3: string, aildet: string, blood: string,
    dob: Date, emcon: number, gender: string, status: string, assiDoc: string) {
    const addPat: AddPatient = {
      fname: fname,
      lname: lname,
      pid: pid,
      age: age,
      phone: phone,
      email: email,
      pswd: pswd,
      address: address,
      attname: attname,
      attphone: attphone,
      ailcat: ailcat,
      ailcat2: ailcat2,
      ailcat3: ailcat3,
      aildet: aildet,
      blood: blood,
      dob: dob,
      emcon: emcon,
      gender: gender,
      status: status,
      assiDoc: assiDoc
    };
    console.log(addPat);
    this.http.post<{ msg: string, detail: AddPatient[] }>('http://localhost:3333/addpat', addPat)
      .subscribe(returnData => {
        console.log(returnData.msg);
        console.log(returnData.detail);
        this.patdata.push(addPat);
      });
  }

  // Assignment to patient
  assignDoctor(patName: string, patEmail: string, patContact: number,
    patAddr: string, patStatus: string, docName: string, docEmail: string,
    docContact: number, assignDate: Date) {
    const assignDoc: AssignDoctor = {
      patName: patName,
      patEmail: patEmail,
      patContact: patContact,
      patAddr: patAddr,
      patStatus: patStatus,
      docName: docName,
      docEmail: docEmail,
      docContact: docContact,
      assignDate: assignDate
    };
    console.log(assignDoc);
    this.http.post<{ msg: string, doc: AssignDoctor[] }>('http://localhost:3333/asDoc', assignDoc)
      .subscribe((result) => {
        console.log(result);
        this.doctorAssign.push(assignDoc);
      });
  }
  // Adding Receptionist
  AddRec(uname: string, email: string, pwd: string, phone: number,
    address: string, dob: Date, age: number, gend: string) {
    const addRec: AddRec = {
      uname: uname,
      email: email,
      pswd: pwd,
      phone: phone,
      address: address,
      dob: dob,
      age: age,
      gender: gend
    };
    this.http.post<{ msg: string, detail: AddRec[] }>('http://localhost:3333/addrec', addRec)
      .subscribe(returnData => {
        console.log(returnData.msg);
        console.log(returnData.detail);
        this.recdata.push(addRec);
      });
  }

  // Adding Therapist
  addTherap(uname: string, email: string, pwd: string, phone: number,
    address: string, dob: Date, age: number, gend: string, stat: string) {
    const addThe: AddTherap = {
      uname: uname,
      email: email,
      pswd: pwd,
      phone: phone,
      address: address,
      dob: dob,
      age: age,
      gender: gend,
      status: stat
    };
    this.http.post<{ msg: string, detail: AddTherap[] }>('http://localhost:3333/addtherap', addThe)
      .subscribe(returnData => {
        console.log(returnData.msg);
        console.log(returnData.detail);
        this.recdata.push(addThe);
      });
  }
  // Adding Appointments
  addAppointment(pname: string, dname: string, appdate: any, prbm: string) {
    const addapp: AddAppoint = {
      doctorName: dname,
      appDate: appdate,
      patName: pname,
      problem: prbm
    };
    console.log(addapp);
    return this.http.post<{ msg: string, detail: AddAppoint[] }>('http://localhost:3333/addappoint', addapp);
  }

}
