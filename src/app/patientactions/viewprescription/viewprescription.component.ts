import { Component, OnInit } from '@angular/core';
import { FindData } from '../../childcomponents/find.module';
import { LoginData } from '../../login/login.service';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.css']
})
export class ViewprescriptionComponent implements OnInit {

  constructor(private findData: FindData, private getDoc: LoginData) { }

  ngOnInit() {
    console.log("Name: " + this.getDoc.doctor);
    this.findData.getPrescForDoc(this.getDoc.doctor);
    this.findData.getPrescForDoc(this.getDoc.doctor).subscribe(result => {
      console.log(result);
      var i = 1;
      result.posts.forEach((ele, index) => {
        $('#vdoc').append(`
        <tr>
          <td>${i}</td>
          <td>${ele.patName}</td>
          <td>${ele.patEmail}</td>
          <td>${ele.bloodPresure}</td>
          <td>${ele.docName}</td>
          <td>${ele.docEmail}</td>
          <td>${ele.presDate}</td>
          <td>${ele.mtype}</td>
          <td>${ele.ins}</td>
          <td>
            <button mat-raised-button class="btn btn-success btn-xs glyphicon glyphicon-eye-open" id="view${index}"></button>
          </td>
        </tr>`);
        i++;
      });
    });
  }

}
