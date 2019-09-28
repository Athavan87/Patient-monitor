import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-therap-dash',
  templateUrl: './therap-dash.component.html',
  styleUrls: ['./therap-dash.component.css']
})
export class TherapDashComponent implements OnInit {
  BarChart = [];
  constructor() { }

  ngOnInit() {
    
    this.BarChart = new Chart('barChart', {
          type: 'line',
          data: {
            labels: ['Patient', 'Prescription'],
            datasets: [{
              label: 'disable color',
              data: [
                3,
                1,
                4
              ],
              backgroundColor: [
                'rgba(30, 184, 211, 0.404)',
                'rgba(30, 184, 211, 0.404)'
              ],
              borderColor: [
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
