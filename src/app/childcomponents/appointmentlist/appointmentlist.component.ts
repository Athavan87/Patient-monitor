import { Component, OnInit } from '@angular/core';
import { FindData } from '../find.module';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit {

  constructor(private finddata: FindData) { }

  ngOnInit() {
    this.finddata.appointlist().subscribe( (result) => {
      console.log(result);
      // this.fname = result.posts[0].fname;
      // console.log(this.fname);
      result.posts.forEach((ele, index) => {
        console.log(ele.patName);
        $('#vdoc').append(`
        <tr>
          <td>${index + 1}</td>          
          <td>${ele.patId}</td>
          <td>${ele.patName}</td>
          <td>${ele.doctorName}</td>
          <td>${ele.appDate}</td>
          <td>${ele.time}</td>
          <td>${ele.problem}</td>
          <td>${ele.status}</td>
        </tr>`);
      });
    });
  }

}
