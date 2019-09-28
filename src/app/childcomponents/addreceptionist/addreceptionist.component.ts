import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddService } from '../child.service';

@Component({
  selector: 'app-addreceptionist',
  templateUrl: './addreceptionist.component.html',
  styleUrls: ['./addreceptionist.component.css']
})
export class AddreceptionistComponent implements OnInit {
  display = 'none';
  ename = '';
  constructor(private service: AddService) { }
  openModal(form: NgForm) {
    this.display = 'block';
    this.ename = form.value.uname;
  }
  onCloseHandled() {
    this.display = 'none';
  }
  onSave (form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.service.AddRec(
      form.value.uname,
      form.value.email,
      form.value.pwd,
      form.value.phone,
      form.value.addr,
      form.value.dob,
      form.value.age,
      form.value.gender
    );
    this.openModal(form);
  }
  ngOnInit() {
  }

}
