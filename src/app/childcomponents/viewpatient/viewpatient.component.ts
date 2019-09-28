import { Component, OnInit } from '@angular/core';
import { FindData } from '../find.module';
import { Router } from '@angular/router';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  constructor(private finddata: FindData, private router: Router) { }
  ngOnInit() {
    this.finddata.getPatients().subscribe((result) => {
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
          <td>${ele.assiDoc}</td>
          <td>
          <button class="btn btn-success btn-xs" id="view${index}"><i class="glyphicon glyphicon-eye-open"></i></button>
          <button class="btn btn-info btn-xs glyphicon glyphicon-pencil" id="edit${index}"></button>
          <button class="btn btn-danger btn-xs glyphicon glyphicon-trash" id="del${index}"></button>
          <a href="#" style="visibility: hidden;"><i class="glyphicon glyphicon-eye-open"></i></a>
          </td>
        </tr>`);
        $(document).ready(() => {
          $(`#view${index}`).click(() => {
            // alert(`view${index}`);
            // alert(result.posts[index].email);
            this.finddata.viewPatients(result.posts, index);
            console.log(result.posts[index].fname);
            this.router.navigate(['/adm-dash/view-pat-role', result.posts[index].pid]);
          });
          $(`#edit${index}`).click(() => {
            // alert(`edit${index}`);
            this.finddata.editDoctors(result.posts, index);
            this.router.navigate(['/adm-dash/edit-doc', result.posts[index].pid]); // logic error
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
