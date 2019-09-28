import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FindData } from '../find.module';
import { Inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  LocalStorageService,
  SessionStorageService,
  LocalStorage,
  SessionStorage
} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-addprescription',
  templateUrl: './addprescription.component.html',
  styleUrls: ['./addprescription.component.css']
})
export class AddprescriptionComponent implements OnInit {
  display = 'none';
  emai: any;
  @LocalStorage() P_Id: any;
  @LocalStorage() P_EM: any;
  @LocalStorage() P_NAME: any;
  @LocalStorage() D_Id: any;
  @LocalStorage() D_EM: any;
  @LocalStorage() D_NAME: any;
  @LocalStorage() B_P: any;
  curDate = new Date()
  constructor(private findData: FindData, private router: Router, private route: ActivatedRoute) { }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  onSave(form: NgForm) {
    // console.log(this.P_Id + this.D_Id);
    if (form.invalid) {
      return;
    }
    this.findData.addPresc(
      this.P_NAME,
      this.P_Id,
      this.P_EM,
      this.B_P,
      this.D_NAME,
      this.D_Id,
      this.D_EM,
      form.value.presdate,
      form.value.mtype,
      form.value.ins).subscribe(res => {
        if(res.msg == 'Prescription added successfully') {
          console.log(res);
          this.openModal();
        }
      });
  }
  ngOnInit() {
    console.log("PE: " + this.findData.patEmail);
    console.log("DE: " + this.findData.doctorEmail);
    console.log("BP: " + this.findData.bloodPresure);

    this.findData.getPat(this.findData.patEmail).subscribe((res) => {
      console.log(res.posts[0].pid);
    });
    this.findData.GetDoc2(this.findData.doctorEmail).subscribe(res => {
      console.log(res.posts[0].docid);
    });
    this.P_Id = this.findData.P_Id;
    this.P_EM = this.findData.patEmail;
    this.P_NAME = this.findData.P_NAME;
    this.D_EM = this.findData.doctorEmail;
    this.D_Id = this.findData.D_Id;
    this.D_NAME = this.findData.D_NAME;
    this.B_P = this.findData.bloodPresure;
  }

}
