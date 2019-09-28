import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularWebStorageModule } from 'angular-web-storage';
import { MatSelectModule } from '@angular/material/select';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule, MatCardModule, MatSidenavModule, MatListModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule, MatToolbarModule, MatExpansionModule, } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddpatientComponent } from './childcomponents/addpatient/addpatient.component';
import { ViewpatientComponent } from './childcomponents/viewpatient/viewpatient.component';
import { AdddoctorComponent } from './childcomponents/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './childcomponents/viewdoctor/viewdoctor.component';
import { ViewreceptionistComponent } from './childcomponents/viewreceptionist/viewreceptionist.component';
import { AddreceptionistComponent } from './childcomponents/addreceptionist/addreceptionist.component';
import { PatientappointmentComponent } from './childcomponents/patientappointment/patientappointment.component';
import { AppointmentlistComponent } from './childcomponents/appointmentlist/appointmentlist.component';
import { AddprescriptionComponent } from './childcomponents/addprescription/addprescription.component';
import { PrescriptionlistComponent } from './childcomponents/prescriptionlist/prescriptionlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PatientDashboardComponent } from './dashboards/patient-dashboard/patient-dashboard.component';
import { ReceptionDashboardComponent } from './dashboards/reception-dashboard/reception-dashboard.component';
import { DoctorDashboardComponent } from './dashboards/doctor-dashboard/doctor-dashboard.component';
import { TherapistDashboardComponent } from './dashboards/therapist-dashboard/therapist-dashboard.component';
import { AddtherapistComponent } from './childcomponents/addtherapist/addtherapist.component';
import { ViewtherapistComponent } from './childcomponents/viewtherapist/viewtherapist.component';
import { MediHistoryComponent } from './childcomponents/medi-history/medi-history.component';
import { AdmDashComponent } from './dashboardoverview/adm-dash/adm-dash.component';
import { DocDashComponent } from './dashboardoverview/doc-dash/doc-dash.component';
import { PatDashComponent } from './dashboardoverview/pat-dash/pat-dash.component';
import { RecepDashComponent } from './dashboardoverview/recep-dash/recep-dash.component';
import { TherapDashComponent } from './dashboardoverview/therap-dash/therap-dash.component';
import { EditdoctorComponent } from './childcomponents/editdoctor/editdoctor.component';
import { ViewroleComponent } from './childcomponents/viewrole/viewrole.component';
import { FindData } from '../app/childcomponents/find.module';
import { ViewpatientroleComponent } from './childcomponents/viewpatientrole/viewpatientrole.component';
import { AssigneddoctorsComponent } from './childcomponents/assigneddoctors/assigneddoctors.component';
import { AssignedpatientsComponent } from './childcomponents/assignedpatients/assignedpatients.component';
import { TherapPatientComponent } from './childcomponents/therap-patient/therap-patient.component';

import { ViewdoctorComponent1 } from './receptcomponents/viewdoctor/viewdoctor.component';
import { ViewpatientComponent2 } from './receptcomponents/viewpatient/viewpatient.component';
import { ViewtherapistComponent2 } from './receptcomponents/viewtherapist/viewtherapist.component';
import { ViewassignedpatientComponent } from './patientactions/viewassignedpatient/viewassignedpatient.component';
import { GetvitalsComponent } from './patientactions/getvitals/getvitals.component';
import { ViewprescriptionComponent } from './patientactions/viewprescription/viewprescription.component';
import { PatientprescComponent } from './childcomponents/patientpresc/patientpresc.component';
import { AssignspldocComponent } from './childcomponents/assignspldoc/assignspldoc.component';

// Rounting Paths
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'adm-dash', component: AdminDashboardComponent,
    children: [
      { path: '', component: AdmDashComponent },
      { path: 'add-doc', component: AdddoctorComponent },
      { path: 'edit-doc/:id', component: EditdoctorComponent },
      { path: 'doc-list', component: ViewdoctorComponent },
      { path: 'view-roles/:id', component: ViewroleComponent },
      { path: 'add-pat', component: AddpatientComponent },
      { path: 'pat-list', component: ViewpatientComponent },
      { path: 'view-pat-role/:id', component: ViewpatientroleComponent },
      { path: 'add-recep', component: AddreceptionistComponent },
      { path: 'recep-list', component: ViewreceptionistComponent },
      { path: 'add-therap', component: AddtherapistComponent },
      { path: 'therap-list', component: ViewtherapistComponent },
      { path: 'add-appoint', component: PatientappointmentComponent },
      { path: 'appoint-list', component: AppointmentlistComponent },
      { path: 'presc-list', component: PrescriptionlistComponent },
      { path: 'med-his', component: MediHistoryComponent },
      { path: 'assign-spldoc/:id', component: AssignspldocComponent }
    ]
  },
  {
    path: 'doc-dash', component: DoctorDashboardComponent,
    children: [
      { path: '', component: DocDashComponent },
      { path: 'asi-pat-list', component: AssignedpatientsComponent },
      { path: 'view-as-pat/:id', component: ViewassignedpatientComponent },
      { path: 'get-vitals/:id', component: GetvitalsComponent },
      { path: 'add-presc', component: AddprescriptionComponent },
      { path: 'view-presc', component: ViewprescriptionComponent },
      { path: 'presc-list', component: PrescriptionlistComponent },
      { path: 'med-his', component: MediHistoryComponent }
    ]
  },
  {
    path: 'pat-dash', component: PatientDashboardComponent,
    children: [
      { path: '', component: PatDashComponent },
      { path: 'assigned-doc', component: AssigneddoctorsComponent },
      { path: 'presc-list', component: PatientprescComponent },
      { path: 'med-his', component: MediHistoryComponent }
    ]
  },
  {
    path: 'recep-dash', component: ReceptionDashboardComponent,
    children: [
      { path: '', component: AdmDashComponent },
      { path: 'add-doc', component: AdddoctorComponent },
      { path: 'doc-list', component: ViewdoctorComponent1 },
      { path: 'view-roles/:id', component: ViewroleComponent },
      { path: 'add-pat', component: AddpatientComponent },
      { path: 'pat-list', component: ViewpatientComponent2 },
      { path: 'view-pat-role/:id', component: ViewpatientroleComponent },
      { path: 'add-therap', component: AddtherapistComponent },
      { path: 'therap-list', component: ViewtherapistComponent2 },
      { path: 'add-appoint', component: PatientappointmentComponent },
      { path: 'appoint-list', component: AppointmentlistComponent },
      { path: 'presc-list', component: PrescriptionlistComponent },
      { path: 'med-his', component: MediHistoryComponent }
    ]
  },
  {
    path: 'therapy-dash', component: TherapistDashboardComponent,
    children: [
      { path: '', component: TherapDashComponent },
      { path: 'the-asi-pat', component: TherapPatientComponent },
      { path: 'presc-list', component: PrescriptionlistComponent },
      { path: 'med-his', component: MediHistoryComponent }
    ]
  },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddpatientComponent,
    ViewpatientComponent,
    AdddoctorComponent,
    ViewdoctorComponent,
    ViewreceptionistComponent,
    AddreceptionistComponent,
    PatientappointmentComponent,
    AppointmentlistComponent,
    AddprescriptionComponent,
    PrescriptionlistComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    ReceptionDashboardComponent,
    DoctorDashboardComponent,
    TherapistDashboardComponent,
    AddtherapistComponent,
    ViewtherapistComponent,
    MediHistoryComponent,
    AdmDashComponent,
    DocDashComponent,
    PatDashComponent,
    RecepDashComponent,
    TherapDashComponent,
    EditdoctorComponent,
    ViewroleComponent,
    ViewpatientroleComponent,
    AssigneddoctorsComponent,
    AssignedpatientsComponent,
    TherapPatientComponent,
    ViewdoctorComponent1,
    ViewpatientComponent2,
    ViewtherapistComponent2,
    ViewassignedpatientComponent,
    GetvitalsComponent,
    ViewprescriptionComponent,
    PatientprescComponent,
    AssignspldocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatGridListModule,
    MatTreeModule,
    HttpClientModule,
    MatDialogModule,
    HttpModule,
    MatNativeDateModule,
    AngularWebStorageModule,
    MatCheckboxModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [FindData, MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [AdddoctorComponent]
})
export class AppModule { }
