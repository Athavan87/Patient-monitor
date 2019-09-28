import { Component, OnInit } from '@angular/core';
import { FindData } from '../../childcomponents/find.module';
import { AddDoc } from '../../childcomponents/model.type';
import * as $ from 'jquery';
import { Router } from '@angular/router';
declare var $: any;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent2 implements OnInit {

  constructor(private finddata: FindData,
              private router: Router) { }

  ngOnInit() {
    this.finddata.getPatients().subscribe((result) => {
      // console.log(result);
      // this.fname = result.posts[0].fname;
      // console.log(this.fname);
      result.posts.forEach((ele, index) => {
        console.log(ele.fname);
        $('#vdoc').append(`
        <tr>
          <td>${ele.fname}</td>
          <td>${ele.lname}</td>
          <td>${ele.pid}</td>
          <td>${ele.email}</td>
          <td>${ele.phone}</td>
          <td>${ele.age}</td>
          <td>${ele.address}</td>
          <td>${ele.attphone}</td>
          <td>${ele.aildet}</td>
          <td>${ele.gender}</td>
          <td>
          <button class="btn btn-success btn-xs" id="view${index}"><i class="glyphicon glyphicon-eye-open"></i></button>
          <button class="btn btn-info btn-xs glyphicon glyphicon-pencil" id="edit${index}"></button>
          <button class="btn btn-danger btn-xs glyphicon glyphicon-trash" id="del${index}"></button>
          <a href="#" style="visibility: hidden;"><i class="glyphicon glyphicon-eye-open"></i></a>
          </td>
        </tr>`);
        $(document).ready(() => {
          $(`#view${index}`).click(() => {
            alert(`view${index}`);
            // alert(result.posts[index].email);
            this.finddata.viewPatients(result.posts, index);
            console.log(result.posts[index].fname);
            // this.router.navigate(['/adm-dash/view-pat-role', result.posts[index].pid]);
          });
          $(`#edit${index}`).click(() => {
            alert(`edit${index}`);
            this.finddata.editDoctors(result.posts, index);
            // this.openModal();
          });
          $(`#del${index}`).click(() => {
            alert(`del${index}`);
            // this.openModal();
          });
        });
      });
    });
  }

}
