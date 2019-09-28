// export interface AddDoc {
//   fname: string;
//   lname: string;
//   email: string;
//   docid: string;
//   pswd: string;
//   address: string;
//   phone: number;
//   spliz: string;
//   ailcat: string;
//   blood: string;
//   dob: Date;
//   emcon: number;
//   gender: string;
//   status: string;
// }

export interface AddDoc {
  fname: string;
  lname: string;
  email: string;
  docid: string;
  pswd: string;
  address: string;
  phone: number;
  spliz: string;
  ailcat: string;
  sunDay: boolean;
  monDay: boolean;
  tuesDay: boolean;
  wednessDay: boolean;
  thursDay: boolean;
  friDay: boolean;
  saturDay: boolean;
  startTime: string;
  endTime: string;
  blood: string;
  dob: Date;
  emcon: number;
  gender: string;
  status: string;
}

export interface AssignDoctor {
  patName: string;
  patEmail: string;
  patContact: number;
  patAddr: string;
  patStatus: string
  docName: string;
  docEmail: string;
  docContact: number;
  assignDate: Date;
}

export interface Prescription {
  patName: string;
  patId: string;
  patEmail: string;
  bloodPresure: number;
  docName: string;
  docId: string;
  docEmail: String;
  presDate: Date;
  mtype: string;
  ins: string;
}

export interface AddPatient {
  fname: string;
  lname: string;
  pid: string;
  age: number;
  phone: number;
  email: string;
  pswd: string;
  address: string;
  attname: string;
  attphone: number;
  ailcat: string;
  ailcat2: string;
  ailcat3: string;
  aildet: string;
  blood: string;
  dob: Date;
  emcon: number;
  gender: string;
  status: string;
  assiDoc: string;
}

export interface AddRec {
  uname: string;
  email: string;
  pswd: string;
  phone: number;
  address: string;
  dob: Date;
  age: number;
  gender: string;
}

export interface AddTherap {
  uname: string;
  email: string;
  pswd: string;
  phone: number;
  address: string;
  dob: Date;
  age: number;
  gender: string;
  status: string;
}

export interface AddAppoint {
  doctorName: string;
  appDate: Date;
  patName: string;
  problem: string;
}
