import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FindData } from '../../childcomponents/find.module';

@Component({
  selector: 'app-recep-dash',
  templateUrl: './recep-dash.component.html',
  styleUrls: ['./recep-dash.component.css']
})
export class RecepDashComponent implements OnInit {
  BarChart = [];
  constructor(private finddata: FindData) { }

  ngOnInit() {

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
            this.finddata.recCount, 
            1, 
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
