import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddService } from '../child.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FindData } from '../find.module';

export interface Blood {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {
  display = 'none';
  constructor(private service: AddService, private DocServ: FindData) { }
  bloods: Blood[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'O+', viewValue: 'O+' },
    { value: 'O-', viewValue: 'O-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB-', viewValue: 'AB-' }
  ];
  AssignDoc = [];
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  onSave(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    const d = new Date();
    const y = d.getFullYear() + '' + '00';
    let text = y.toString();
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 4; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.DocServ.getDoctors().subscribe((resDoc) => {
      console.log('Total Doc: ' + resDoc.posts.length);
      resDoc.posts.forEach((ele, index) => {
        if (resDoc.posts[index].spliz === 'General' && resDoc.posts[index].status === 'Available') {
          // console.log('General: ' + resDoc.posts[index].fname);
          this.AssignDoc.push(resDoc.posts[index]);
        }
      });
      const b = Math.floor(Math.random() * resDoc.posts.length) - 1;
      console.log(b);
      const patName = form.value.fn + ' ' + form.value.ln;
      const docName = this.AssignDoc[b].fname + ' ' + this.AssignDoc[b].lname;
      console.log('Assign Doc ' + docName);

       this.service.AddPatient(
          form.value.fn,
          form.value.ln,
          text,
          form.value.age,
          form.value.phone,
          form.value.email,
          form.value.pwd,
          form.value.addr,
          form.value.attname,
          form.value.attmob,
          form.value.ailcat,
          form.value.ailcat2,
          form.value.ailcat3,
          form.value.aildet,
          form.value.blood,
          form.value.dob,
          form.value.emcon,
          form.value.gender,
          form.value.status,
          docName
        );

      const curDate = new Date();
      this.service.assignDoctor(
        patName,
        form.value.email,
        form.value.phone,
        form.value.addr,
        form.value.status,
        docName,
        this.AssignDoc[b].email,
        this.AssignDoc[b].phone,
        curDate);
    });

    this.AssignDoc = [];
    this.openModal();
  }

  ngOnInit() {
  }

}
