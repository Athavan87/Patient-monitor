export interface Special {
  value: string;
}

import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FindData } from '../find.module';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-assignspldoc',
  templateUrl: './assignspldoc.component.html',
  styleUrls: ['./assignspldoc.component.css']
})
export class AssignspldocComponent implements OnInit {

  specl: Special[] = [];
  speclDoc: Special[] = [];
  SelValue: any = '';
  SpclDoc: any = [];
  PatName;
  display = 'none';
  docName: string;
  constructor(private finddata: FindData, private router: Router, private route: ActivatedRoute) { }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  onSave(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(form.value.spcl + " " + form.value.spcldoc);
    this.docName = form.value.spcldoc;
    // console.log(this.docName.substring(4));
    const trimName = this.docName.substring(4)
    console.log(trimName);
    this.finddata.UpdateSplDoc(this.route.snapshot.paramMap.get('id'),
      trimName).subscribe(res => {
        console.log('Assigned succesfully');
        console.log(res);
      });
      this.openModal();
  }
  alt(val) {
    // alert(val);
    this.SelValue = val;
    this.speclDoc = [];
    this.SpclDoc.forEach((res, index) => {
      if (res.spliz === val) {
        this.speclDoc.push({ value: 'Dr. ' + res.fname });
      }
      // console.log(res.fname);
    });
  }
  // checking(selectedVal) {
  //   console.log(selectedVal.substring(4));
  //   this.SpclDoc.forEach((res, index) => {
  //     if(res.fname === selectedVal.substring(4) && res.status === 'Available') {
  //       console.log(res.fname);
  //       this.DocStatus = 'Doctor is on leave'
  //     } else {
  //       this.DocStatus = '';
  //     }
  //     // console.log(res.fname);
  //   });
  // }

  ngOnInit() {
    this.PatName = this.route.snapshot.paramMap.get('id');
    this.finddata.getDoctors().subscribe(res => {
      this.specl = [];
      this.SpclDoc = [];
      res.posts.forEach((ele, index) => {
        if (res.posts[index].spliz != 'General') {
          console.log(res.posts[index]);
          this.SpclDoc.push(res.posts[index]);
          this.specl.push({ value: res.posts[index].spliz });
          // For showing Doctor: 
          // if(res.posts[index].spliz == this.SelValue){
          //   this.speclDoc.push({ value: 'Dr. '+res.posts[index].fname });
          // }          
        }
      });
    });
  }

}
