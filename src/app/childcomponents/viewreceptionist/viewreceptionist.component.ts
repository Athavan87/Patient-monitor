import { Component, OnInit } from '@angular/core';
import { FindData } from '../find.module';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-viewreceptionist',
  templateUrl: './viewreceptionist.component.html',
  styleUrls: ['./viewreceptionist.component.css']
})
export class ViewreceptionistComponent implements OnInit {

  constructor(private finddata: FindData) { }

  ngOnInit() {
    this.finddata.getreceptionist().subscribe( (result) => {
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
        </tr>`);
      });
    });
  }

}
