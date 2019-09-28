import { Component, OnInit } from '@angular/core';
import { FindData } from '../find.module';
import { AddDoc } from '../model.type';
import * as $ from 'jquery';
declare var $: any;
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {
  private docDetail: AddDoc[] = [];
  docDet;
  num: any;
  emai: any;
  constructor(private finddata: FindData,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.emai = this.route.snapshot.paramMap.get('id');
    this.finddata.GetDoc(this.emai).subscribe((result) => {
      console.log(result.posts);
      console.log(result.posts.length);
      $('#role').append(`
        <h4>Doctor detail</h4><br>
        <pre>
        <h4>General Details:</h4>
          <span><b>First Name</b>              : ${result.posts[0].fname}</span><br>
          <span><b>Last Name</b>               : ${result.posts[0].lname}</span><br>
          <span><b>Email- ID</b>               : ${result.posts[0].email}</span><br>
          <span><b>Doctor ID</b>               : ${result.posts[0].docid}</span><br>
          <span><b>Password</b>                : ${result.posts[0].pswd}</span><br>
          <span><b>Address</b>                 : ${result.posts[0].address}</span><br>
          <span><b>Contact Number</b>          : ${result.posts[0].phone}</span><br>
          <span><b>Specialization</b>          : ${result.posts[0].spliz}</span><br>
          <span><b>Ailment Category</b>        : ${result.posts[0].ailcat}</span><br>
          <span><b>Blood Group</b>             : ${result.posts[0].blood}</span><br>
          <span><b>Date Of Birth</b>           : ${result.posts[0].dob}</span><br>
          <span><b>Emergency Contact</b>       : ${result.posts[0].emcon}</span><br>
          <span><b>Gender</b>                  : ${result.posts[0].gender}</span><br>
          <h4>Day of week:</h4>
          <span><b>Sunday</b>                  : ${result.posts[0].timeSchedule[0].dayofWeek[0].sunDay}</span><br>
          <span><b>Monday</b>                  : ${result.posts[0].timeSchedule[0].dayofWeek[0].monDay}</span><br>
          <span><b>Tuesday</b>                 : ${result.posts[0].timeSchedule[0].dayofWeek[0].tuesDay}</span><br>
          <span><b>Wednessday</b>              : ${result.posts[0].timeSchedule[0].dayofWeek[0].wednessDay}</span><br>
          <span><b>Thursday</b>                : ${result.posts[0].timeSchedule[0].dayofWeek[0].thursDay}</span><br>
          <span><b>Friday</b>                  : ${result.posts[0].timeSchedule[0].dayofWeek[0].friDay}</span><br>
          <span><b>Saturday</b>                : ${result.posts[0].timeSchedule[0].dayofWeek[0].saturDay}</span><br>
          <h4>Time of day:</h4>
          <span><b>Start Time</b>              : ${result.posts[0].timeSchedule[0].startTime}</span><br>
          <span><b>End Time</b>                : ${result.posts[0].timeSchedule[0].endTime}</span><br>
          <button class="btn btn-info" id="back">Back to list</button>
          </pre>
      `);
      $('#back').click(() => {
        // alert('this is back');
        this.router.navigateByUrl('/adm-dash/doc-list');
      });
    });
  }

}
