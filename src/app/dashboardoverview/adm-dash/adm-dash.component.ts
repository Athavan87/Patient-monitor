import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { FindData } from '../../childcomponents/find.module';
// import { PrescriptionlistComponent } from '../../childcomponents/prescriptionlist/prescriptionlist.component';
import { Chart } from 'chart.js';
import {
  LocalStorageService,
  SessionStorageService,
  LocalStorage,
  SessionStorage
} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-adm-dash',
  templateUrl: './adm-dash.component.html',
  styleUrls: ['./adm-dash.component.css']
})
export class AdmDashComponent implements OnInit {
  public doctorCount: any;
  public patientCount: any;
  public recepCount: any;
  public therapCount: any;
  public prescLength: number;
  LineChart = [];
  BarChart = [];

  constructor(private finddata: FindData) {
  }

  ngOnInit() {
    // this.LineChart = new Chart('lineChart', {
    //   type: 'line',
    //   data: {
    //     labels: ['Apple', 'Orange', 'Mango'],
    //     datasets: [{
    //       label: 'Number of item should in fruit',
    //       data: [29, 34, 50],
    //       fill: false,
    //       lineTension: 0.2,
    //       borderColor: 'red',
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     title: {
    //       text: 'Line Chart',
    //       display: true
    //     },
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });

    this.finddata.getDoctors().subscribe((result) => {
      this.doctorCount = result.posts.length;
      console.log(this.doctorCount);
    });

    this.finddata.getPatients().subscribe((result) => {
      this.patientCount = result.posts.length;
      console.log(result.posts.length);
    });
    this.finddata.getreceptionist().subscribe((result) => {
      this.recepCount = result.posts.length;
      console.log(result.posts.length);
    });
    this.finddata.therapist().subscribe((result) => {
      this.therapCount = result.posts.length;
      console.log(result.posts.length);
    });

    // prescription length
    this.prescLength = this.finddata.prescLength;

    const a = this.finddata.docCount;
    console.log("A " + a);
    //Bar chart
    this.BarChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Doctor', 'Patient', 'Receptionist', 'Therapist', 'Prescription', 'MedicalHistory'],
        datasets: [{
          label: 'disable color',
          data: [
            this.finddata.docCount,
            this.finddata.patCount,
            this.finddata.recCount,
            this.finddata.therapCount,
            this.finddata.prescLength,
            4
          ],
          backgroundColor: [
            'rgba(30, 184, 211, 0.404)',
            'rgba(30, 184, 211, 0.404)',
            'rgba(30, 184, 211, 0.404)',
            'rgba(30, 184, 211, 0.404)',
            'rgba(30, 184, 211, 0.404)',
            'rgba(30, 184, 211, 0.404)'
          ],
          borderColor: [
            'rgb(139, 129, 129)',
            'rgb(139, 129, 129)',
            'rgb(139, 129, 129)',
            'rgb(139, 129, 129)',
            'rgb(139, 129, 129)',
            'rgb(139, 129, 129)',
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
