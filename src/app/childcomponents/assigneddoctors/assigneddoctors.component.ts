import { Component, OnInit } from '@angular/core';
import { FindData } from '../find.module';
import * as $ from 'jquery';
declare var $: any;
import { LoginData } from '../../login/login.service';

@Component({
  selector: 'app-assigneddoctors',
  templateUrl: './assigneddoctors.component.html',
  styleUrls: ['./assigneddoctors.component.css']
})
export class AssigneddoctorsComponent implements OnInit {

  constructor(private service: FindData, private serv: LoginData) { }

  ngOnInit() {

    this.service.getAssignPat(this.serv.SendPatient()).subscribe((result) => {
      console.log(result.posts);
      result.posts.forEach((element, index) => {
        $(document).ready(() => {
          $('#asdoc').append(`
          <tr>
            <td>${index + 1}</td>
            <td>${result.posts[index].docName}</td>
            <td>${result.posts[index].docEmail}</td>
            <td>${result.posts[index].docContact}</td>
            <td>${result.posts[index].assignDate}</td>
            <td>
              <button mat-raised-button class="btn btn-success btn-xs glyphicon glyphicon-eye-open" id="view${index}"></button>
            </td>
          </tr>
          `);
        });
      });
    });
  }

}
