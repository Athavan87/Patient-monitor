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
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent1 implements OnInit {

  constructor(private finddata: FindData,
              private router: Router) { }

  ngOnInit() {
    this.finddata.getDoctors().subscribe( (result) => {
      // console.log(result);
      // this.fname = result.posts[0].fname;
      // console.log(this.fname);
      var i = 1;
      result.posts.forEach((ele, index) => {
        console.log(index);
        if(ele.status == 'Available'){
          console.log(ele.status);
          $('#vdoc').append(`
        <tr>
          <td>${i}</td>
          <td>${ele.fname}</td>
          <td>${ele.lname}</td>
          <td>${ele.email}</td>
          <td>${ele.docid}</td>
          <td>${ele.address}</td>
          <td>${ele.phone}</td>
          <td>${ele.spliz}</td>
          <td>${ele.gender}</td>
          <td>
            <button mat-raised-button class="btn btn-success btn-xs glyphicon glyphicon-eye-open" id="view${index}"></button>
            <button class="btn btn-info btn-xs 	glyphicon glyphicon-pencil" id="edit${index}"></button>
            
            <a href="#" style="visibility: hidden;"><i class="glyphicon glyphicon-eye-open"></i></a>
          </td>
        </tr>`);
        i++;
        $(document).ready(() => {
          $(`#view${index}`).click(() => {
            alert(`view${index}`);
            // alert(result.posts[index].email);
            this.finddata.viewDoctors(result.posts, index);
            // console.log(result.posts[index].email);
            // this.router.navigate(['/adm-dash/view-roles', result.posts[index].docid]);
            });
          $(`#edit${index}`).click(() => {
            alert(`edit${index}`);
            this.finddata.editDoctors(result.posts, index);
            // this.router.navigate(['/adm-dash/edit-doc', result.posts[index].docid]);
          // this.openModal();
          });
          // $(`#del${index}`).click(() => {
          //   // alert(`del${index}`);
          //   var retVal = confirm(`Are you sure want to delete?`);
          //   if(retVal == true) {
          //     // alert(ele.docid);
          //     this.finddata.deleteDoc(ele.docid).subscribe((res) =>{
          //       console.log(res.msg +"\n"+ res.posts[0].email);
          //       // this.router.navigateByUrl('/adm-dash/view-roles');
          //       window.location.reload();
          //     });
          //   } <button class="btn btn-danger btn-xs glyphicon glyphicon-trash" id="del${index}"></button>
          // // this.openModal();
          // });
        });
        }
        
      });
    });
  }

}
