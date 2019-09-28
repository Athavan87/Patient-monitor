import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FindData } from '../../childcomponents/find.module';
import * as $ from 'jquery';
declare var $: any;
import { LoginData } from '../../login/login.service';

@Component({
  selector: 'app-getvitals',
  templateUrl: './getvitals.component.html',
  styleUrls: ['./getvitals.component.css']
})
export class GetvitalsComponent implements OnInit {
  email: any;
  constructor(
    private findData: FindData,
    private router: Router,
    private route: ActivatedRoute,
    private getDoc: LoginData) { }

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('id');
    console.log("Pat: "+this.email);
    console.log(this.getDoc.doctor);
    this.findData.getVitals()
      .subscribe((result) => {
        console.log(result);
        var color = '';
        $('#role').append(`
        <h4>Recent Vitals</h4><br>
        <pre>
          <span><b>Body Temperature</b>              : ${result.pos[0].bodyTemp}</span><br>
          <span><b>Pulse Rate</b>                    : ${result.pos[0].pulseRate}</span><br>
          <span><b>Respration Rate</b>               : ${result.pos[0].respRate}</span><br>
          <span><b>Blood Pressure</b>                : ${result.pos[0].bloodPressure}</span><br>
          <button class="btn btn-info" id="back">Back to list</button>    <button class="btn btn-info" id="presc">Add Prescription</button>
          </pre>
      `);
        $('#back').click(() => {
          // alert('this is back');
          this.router.navigateByUrl('/doc-dash/asi-pat-list');
        });
        $('#presc').click(() => {
          this.findData.SavePresc(this.email, this.getDoc.doctor, result.pos[0].bloodPressure);
          this.router.navigateByUrl('/doc-dash/add-presc');
          // this.router.navigate(['/doc-dash/add-presc',this.route.snapshot.paramMap.get('id'),this.getDoc.doctor]);
          // alert(this.route.snapshot.paramMap.get('id'));
        });
      });
  }

}
