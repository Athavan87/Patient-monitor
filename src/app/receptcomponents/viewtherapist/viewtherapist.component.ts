import { Component, OnInit } from '@angular/core';
import { FindData } from '../../childcomponents/find.module';
import * as $ from 'jquery';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-viewtherapist',
  templateUrl: './viewtherapist.component.html',
  styleUrls: ['./viewtherapist.component.css']
})
export class ViewtherapistComponent2 implements OnInit {

  constructor(private finddata: FindData,
              private router: Router) { }

  ngOnInit() {
    this.finddata.therapist().subscribe( (result) => {
      // console.log(result);
      // this.fname = result.posts[0].fname;
      // console.log(this.fname);
      result.posts.forEach((ele) => {
        console.log(ele.uname);
        $('#vdoc').append(`
        <tr>
          <td>${ele.uname}</td>
          <td>${ele.email}</td>
          <td>${ele.dob}</td>
          <td>${ele.phone}</td>
          <td>${ele.address}</td>
          <td>${ele.age}</td>
          <td>${ele.gender}</td>
          <td>${ele.status}</td>
        </tr>`);
      });
    });
  }

}
