import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindData } from '../../childcomponents/find.module';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-viewassignedpatient',
  templateUrl: './viewassignedpatient.component.html',
  styleUrls: ['./viewassignedpatient.component.css']
})
export class ViewassignedpatientComponent implements OnInit {
  emai: any;
  constructor(private route: ActivatedRoute,
    private findData: FindData, private router: Router) { }

  ngOnInit() {
    this.emai = this.route.snapshot.paramMap.get('id');
    console.log(this.emai);
    this.findData.getAsPatient(this.emai).subscribe((result) => {
      console.log(result.posts);
      $('#role').append(`
        <h4>Patient Details</h4><br>
        <pre>
          <span><b>First Name</b>                   : ${result.posts[0].fname}</span><br>
          <span><b>Last Name</b>                    : ${result.posts[0].lname}</span><br>
          <span><b>Email</b>                        : ${result.posts[0].email}</span><br>
          <span><b>Contact Number</b>               : ${result.posts[0].phone}</span><br>
          <span><b>Age</b>                          : ${result.posts[0].age}</span><br>
          <span><b>Address</b>                      : ${result.posts[0].address}</span><br>
          <span><b>Blood Group</b>                  : ${result.posts[0].blood}</span><br>
          <span><b>Ailment 1</b>                    : ${result.posts[0].ailcat}</span><br> 
          <span><b>Ailment 2</b>                    : ${result.posts[0].ailcat2}</span><br>  
          <span><b>Ailment Detail</b>               : ${result.posts[0].aildet}</span><br>  
          <span><b>Attender Mobile</b>              : ${result.posts[0].attphone}</span><br>                 
          <span><b>Date Of Birth</b>                : ${result.posts[0].dob}</span><br>
          <span><b>Emergency Contact</b>            : ${result.posts[0].emcon}</span><br>
          <span><b>Gender</b>                       : ${result.posts[0].gender}</span><br>
          <button class="btn btn-info" id="back">Back to list</button>
          </pre>
      `);
      $('#back').click(() => {
        // alert('this is back');
        this.router.navigateByUrl('/doc-dash/asi-pat-list');
      });
    });
  }

}
