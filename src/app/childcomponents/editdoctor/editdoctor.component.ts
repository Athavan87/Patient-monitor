export interface Blood {
  value: string;
  viewValue: string;
}
export interface Gender {
  gen: any;
}

import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
declare var $: any;
import { FindData } from '../find.module';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AddDoc } from '../model.type';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-editdoctor',
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {
  private docDetail: AddDoc[] = [];
  num: any;
  disableSelect = new FormControl(false);
  // For storing doctor details
  fn: string; ln: string; em: string; did: string;
  pwd: string; addrs: string; mo: Number;
  spcli: string; ail: string; bld: string;
  datbirth: Date; emer: Number; ge: any;
  types: Gender[] = [];
  constructor(private finddata: FindData,
    private route: ActivatedRoute) { }
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
  ngOnInit() {

    this.finddata.EditDoc(this.route.snapshot.paramMap.get('id')).subscribe((result) => {
      console.log(result.posts[0].fname);
      this.fn = result.posts[0].fname;
      this.ln = result.posts[0].lname;
      this.em = result.posts[0].email;
      this.did = result.posts[0].docid;
      this.pwd = result.posts[0].pswd;
      this.addrs = result.posts[0].address;
      this.mo = result.posts[0].phone;
      this.spcli = result.posts[0].spliz;
      this.ail = result.posts[0].ailcat;
      this.bld = result.posts[0].blood;
      this.datbirth = result.posts[0].dob;
      this.emer = result.posts[0].emcon;
      this.ge = result.posts[0].gender;
      this.types = [
        { gen: result.posts[0].gender }
      ];
      this.types.push(this.ge);
    });
    console.log(this.types[0].gen);
  }
  onSave(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(this.fn);
  }

}
