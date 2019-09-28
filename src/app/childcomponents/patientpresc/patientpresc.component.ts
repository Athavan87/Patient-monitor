import { Component, OnInit } from '@angular/core';
import { LoginData } from '../../login/login.service';
import { FindData } from '../../childcomponents/find.module';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-patientpresc',
  templateUrl: './patientpresc.component.html',
  styleUrls: ['./patientpresc.component.css']
})
export class PatientprescComponent implements OnInit {

  constructor(private getPat: LoginData,
    private findData: FindData) { }

  ngOnInit() {
    console.log(this.getPat.Patient);
    this.findData.getPrescForPat(this.getPat.Patient).subscribe(result => {
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
