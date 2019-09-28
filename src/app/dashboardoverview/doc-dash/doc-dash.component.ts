import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { LoginData } from '../../login/login.service';
import { FindData } from '../../childcomponents/find.module';

@Component({
  selector: 'app-doc-dash',
  templateUrl: './doc-dash.component.html',
  styleUrls: ['./doc-dash.component.css']
})
export class DocDashComponent implements OnInit {
  BarChart = [];
  docName;
  assignedPat: any;
  PrescriptionByDoc: any;
  constructor(private service: LoginData,
    private serv: FindData) { }

  ngOnInit() {
    // this.docName = this.service.SendDoctor();
    // console.log("Doctor " + this.service.SendDoctor());
    // this.serv.getAssignDoc(this.docName).subscribe((result) => {
    //   console.log(result.posts.length);
    //   // this.assignedPat = result.posts.length;
    // });
    this.PrescriptionByDoc = this.serv.PrescByDoc;
    this.assignedPat = this.serv.asiPatCount;
    this.BarChart = new Chart('barChart', {
      type: 'line',
      data: {
        labels: ['Patient', 'Prescription', 'MedicalHistory'],
        datasets: [{
          label: 'disable color',
          data: [
            this.serv.asiPatCount,
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
