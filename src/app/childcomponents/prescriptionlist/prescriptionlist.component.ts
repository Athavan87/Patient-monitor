import { Component, OnInit } from '@angular/core';
import { FindData } from '../find.module';
import * as $ from 'jquery';
declare var $: any;
import {
  LocalStorageService,
  SessionStorageService,
  LocalStorage,
  SessionStorage
} from 'angular-web-storage';

@Component({
  selector: 'app-prescriptionlist',
  templateUrl: './prescriptionlist.component.html',
  styleUrls: ['./prescriptionlist.component.css']
})
export class PrescriptionlistComponent implements OnInit {
  @LocalStorage() prescLength: number;
  constructor(private findData: FindData) { }

  ngOnInit() {
    this.findData.getPrescription().subscribe(result => {
      console.log(result);
      this.prescLength = result.posts.length;
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
