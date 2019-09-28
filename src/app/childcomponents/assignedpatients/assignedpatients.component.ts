import { Component, OnInit } from '@angular/core';
import { FindData } from '../find.module';
import * as $ from 'jquery';
declare var $: any;
import { LoginData } from '../../login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assignedpatients',
  templateUrl: './assignedpatients.component.html',
  styleUrls: ['./assignedpatients.component.css']
})
export class AssignedpatientsComponent implements OnInit {

  constructor(private service: FindData,
    private serv: LoginData,
    private router: Router) { }
 
  ngOnInit() {
    // console.log("Doctor " + this.service.SendDoctor());
    console.log("Assigned Doc" + this.serv.SendDoctor());
    var email = this.serv.SendDoctor();
    console.log(email);
    this.service.getAssignDoc(this.serv.SendDoctor()).subscribe((result) => {
      console.log(result.posts);
      result.posts.forEach((element, index) => {
        $(document).ready(() => {
          $('#asdoc').append(`
          <tr>
            <td>${index + 1}</td>
            <td>${result.posts[index].patName}</td>
            <td>${result.posts[index].patEmail}</td>
            <td>${result.posts[index].patContact}</td>
            <td>${result.posts[index].patAddress}</td>
            <td>${result.posts[index].patStatus}</td>
            <td>${result.posts[index].assignDate}</td>
            <td>
              <button mat-raised-button class="btn btn-info btn-xs glyphicon glyphicon-eye-open" id="view${index}"></button>
              <button mat-raised-button class="btn btn-success btn-xs" id="get${index}">Get Vital</button>
            </td>
          </tr>
          `);
          $(`#view${index}`).click(() => {
            // alert(`view${index}`);
            // alert(result.posts[index].email);
            // this.finddata.viewDoctors(result.posts, index);
            // console.log(result.posts[index].email);
            this.router.navigate(['/doc-dash/view-as-pat', result.posts[index].patEmail]);
          });
          $(`#get${index}`).click(() => {
            // alert(`edit${index}`);
            // this.finddata.editDoctors(result.posts, index);
            this.router.navigate(['/doc-dash/get-vitals', result.posts[index].patEmail]);
            // this.openModal();
          });
        });
      });
    });
  }

}