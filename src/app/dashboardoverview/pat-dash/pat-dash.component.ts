import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FindData } from '../../childcomponents/find.module';
import * as $ from 'jquery';
declare var $: any;
import { LoginData } from '../../login/login.service';

@Component({
  selector: 'app-pat-dash',
  templateUrl: './pat-dash.component.html',
  styleUrls: ['./pat-dash.component.css']
})
export class PatDashComponent implements OnInit {
  BarChart = [];
  assignedDoc: any;
  PrescFromDoc: any;
  constructor(private service: FindData, private loginServ: LoginData) { }

  ngOnInit() {
    this.PrescFromDoc = this.service.PrescForPat;
    this.service.getAssignPat(this.loginServ.SendPatient()).subscribe(res =>{
      // console.log(res.posts);
      this.assignedDoc = res.posts.length;
    });
    this.BarChart = new Chart('barChart', {
      type: 'line',
      data: {
        labels: ['Doctor', 'Prescription', 'MedicalHistory'],
        datasets: [{
          label: 'disable color',
          data: [
            this.service.asiDocCount,
            1,
            4
          ],
          backgroundColor: [
            'rgba(30, 184, 211, 0.404)',
            'rgba(30, 184, 211, 0.404)',
            'rgba(30, 184, 211, 0.404)'
          ],
          borderColor: [
            'rgb(139, 129, 129)',
            'rgb(139, 129, 129)',
            'rgb(139, 129, 129)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Overview Chart',
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
