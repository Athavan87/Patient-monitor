// Dependencies fo rexpress, mongoose, body parser
const express = require('express');
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Mailer Package
const nodemailer = require('nodemailer');
// Seeting mail instances
var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: 'athavan19794@gmail.com',
    pass: 'Athavan61*'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// requiring needed files
const User = require('./models/adminschemas');
const Doctor = require('./models/doctorschema');
const Patient = require('./models/patientSchema');
const Receptionist = require('./models/receptioschema');
const Therapist = require('./models/therapistschema');
const Appointment = require('./models/appointmentschema');
const AssignDoctor = require('./models/assigndoctorschema');
const Vitals = require('./models/vitalsthresholdschema');
const Prescription = require('./models/prescriptionschema');
const UserRoutes = require('./routes/auth');

// Variabl for express
const app = express();

// Connection to mongodb
mongo.connect("mongodb://localhost/patientmonitor")
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Failed to connect");
    console.log("Please check mongodb service:");
    console.log("run *sudo service mongodb start* in terminal");
  });

//Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Adding headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, PATCH, DELETE, OPTIONS"
  );
  //Without calling next() it'll not run
  next();
});

// getpatrole getting patient role
app.get("/getpatrole/:eml", (req, res, next) => {
  console.log("Patient Id " + req.params.eml);
  if (req.params.eml != '') {
    Patient.find({ pid: req.params.eml }).then(documents => {
      if (documents.length > 0) {
        res.status(200).json({
          message: "Patient fetched successfully!...",
          posts: documents
        });
        console.log(documents);
      }
    }).catch(err => {
      res.json({
        message: "Patient not available!..."
      });
      console.log(`Patient not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Patient can not be empty!..."
    });
  }
});

app.get("/getvitals", (req, res, next) => {
  // const vit = new Vitals({
  //   bodyTemp: req.body.bodytemp,
  //   pulseRate: req.body.pulse,
  //   respRate: req.body.resp,
  //   bloodPressure: req.body.bloodpre
  // });
  Vitals.aggregate([{ $sample: { size: 1 } }]).then(doc => {
    res.status(201).json({
      msg: "vitals fetched successfully!...",
      pos: doc
    });
    console.log("Get Vitals " + doc);
    // res.status(201).json({
    //   message: "Nothing to fetch",
    // });
  }).catch(err => {
    res.json({
      message: "Vitals can not get!..."
    });
    console.log(`Vitals can not get!... \n ${err}`);
  });
});


// Adding Doctor
app.post('/adddoc', (req, res, next) => {
  console.log(req.body.sunDay);
  console.log(req.body.friDay);
  console.log(req.body.startTime);
  console.log(req.body.endTime);
  const doc = new Doctor({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    docid: req.body.docid,
    pswd: req.body.pswd,
    address: req.body.address,
    phone: req.body.phone,
    spliz: req.body.spliz,
    ailcat: req.body.ailcat,
    blood: req.body.blood,
    dob: req.body.dob,
    emcon: req.body.emcon,
    gender: req.body.gender,
    status: req.body.status,
    timeSchedule: [{
      dayofWeek: {
        sunDay: req.body.sunDay,
        monDay: req.body.monDay,
        tuesDay: req.body.tuesDay,
        wednessDay: req.body.wednessDay,
        thursDay: req.body.thursDay,
        friDay: req.body.friDay,
        saturDay: req.body.saturDay
      },
      startTime: req.body.startTime,
      endTime: req.body.endTime,
    }]
  });
  console.log(doc.timeSchedule);
  doc.save().then(rest => {
    console.log('Doctor added successfully');
    res.status(201).json({
      msg: 'Doctor added successfully',
      detail: rest
    });
    console.log(rest);

    // Setting Address to send mail
    let SendTo = {
      from: 'athavan19794@gmail.com',
      to: req.body.email,
      subject: 'Adding doctor',
      text: `You are registered as a doctor: \n
            your login: \n
            username: ${req.body.email}\n
            password: ${req.body.pswd}`
    };
    // Sending the mail
    transporter.sendMail(SendTo).then(error => {
      console.log(`Mail has been send: \n ${SendTo.to}`);
    }).catch(error => {
      console.log(`Can not send mail to: ${SendTo.to}`);
      console.log(`Because ${error}`);
    });
  }).catch(err => {
    res.json({
      msg: 'Can not add'
    });
    console.log(`Could not insert ${err}`);
  });
});

//Update doctor status uptdoc
app.put('/uptdoc/:val', (req, res, next) => {
  console.log("ID: " + req.params.val);
  Doctor.update({ docid: req.params.val }, { $set: { status: "NotAvailable" } })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        msg: `Doctor ${result[0].docid} deleted success fully`,
        posts: result
      });
    });//.catch(err => {
  //   console.log("can not delete: "+ err);
  // });  
  // Doctor.find({docid : req.params.val}).then((res) => {
  //   console.log(res);
  // });                                                           
});


app.post('/uptslot', (req, res, next) => {
  const appointment = new Appointment({
    doctorName: req.body.Dname,
    appDate: req.body.Appdate,
    patName: req.body.Pname,
    patId: req.body.Pid,
    problem: req.body.Problem,
    status: req.body.Status,
    time: req.body.Time
  });
  console.log(appointment);
  appointment.save().then(result => {
    console.log(result);
  });
});


//Update special doctor for patient
app.put('/uptspldoc', (req, res, next) => {
  console.log("ID: " + req.body.Id);
  console.log("ID: " + req.body.Sl);
  var emal = '';
  var DEM = '';
  var DC = '';
  Patient.updateOne({ pid: req.body.Id }, { $set: { assiDoc: req.body.Sl } })
    .then((result) => {
      // console.log(result);
      res.status(201).json({
        msg: `SpclDoctor ${req.body.Sl} assigned success fully`,
        posts: result
      });
      Patient.find({ pid: req.body.Id }).then(res => {
        emal = res[0].email;
        // console.log(res[0].email);
        Doctor.findOne({ fname: req.body.Sl }).then(rst => {
          console.log(rst.email);
          // DEM = rst.email;
          // DC = rst.phone;
          // console.log(DEM + " " + DC);
          AssignDoctor.updateOne({ patEmail: emal }, {
            $set:
              { docName: req.body.Sl, docEmail: rst.email, docContact: rst.phone }
          })
            .then(res => {
              console.log("ass:");
              console.log(res);
            });
        });
      });
    });
  // AssignDoctor.update({ docid: req.params.val }, { $set: { status: "NotAvailable" } })
  // .then((result) => {
  //   console.log(result);
  //   res.status(201).json({
  //     msg: `Doctor ${result[0].docid} deleted success fully`,
  //     posts: result
  //   });
  // });
});



//Assign Doctor
app.post('/asDoc', (req, res, next) => {
  const AsDoc = new AssignDoctor({
    docName: req.body.docName,
    patName: req.body.patName,
    docEmail: req.body.docEmail,
    patEmail: req.body.patEmail,
    docContact: req.body.docContact,
    patContact: req.body.patContact,
    patAddress: req.body.patAddr,
    patStatus: req.body.patStatus,
    assignDate: req.body.assignDate
  });
  console.log(AsDoc);
  AsDoc.save().then((result) => {
    res.status(201).json({
      msg: 'Patient assigned successfully',
      detail: result
    });
    let SendTo = {
      from: 'athavan19794@gmail.com',
      to: req.body.patEmail,
      subject: 'Assigning Doctor',
      text: `You are assined to Doctor: ${req.body.docName}: \n
              you can login to your dashboard for more detail`
    };
    let SendTo2 = {
      from: 'athavan19794@gmail.com',
      to: req.body.docEmail,
      subject: 'Assigning Patient',
      text: `You are assined to patient: ${req.body.patName}: \n
              you can login to your dashboard for more detail`
    };
    // Sending the mail
    transporter.sendMail(SendTo).then(error => {
      console.log(`Mail has been send to: \n ${SendTo.to}`);
    }).catch(error => {
      console.log(`Can not send mail to: ${SendTo.to}`);
      console.log(`Because ${error}`);
    });
    transporter.sendMail(SendTo2).then(error => {
      console.log(`Mail has been send to: \n ${SendTo2.to}`);
    }).catch(error => {
      console.log(`Can not send mail to: ${SendTo2.to}`);
      console.log(`Because ${error}`);
    });
  }).catch(err => {
    res.json({
      msg: `Can not assign to doctor ${err}`
    });
    // console.log(`Could not insert ${err}`);
  });
});

// Adding patient
app.post('/addpat', (req, res, next) => {
  bcrypt.hash(req.body.pswd, 10).then(hashedPassword => {
    const pat = new Patient({
      fname: req.body.fname,
      lname: req.body.lname,
      pid: req.body.pid,
      age: req.body.age,
      phone: req.body.phone,
      email: req.body.email,
      pswd: hashedPassword,
      address: req.body.address,
      attname: req.body.attname,
      attphone: req.body.attphone,
      ailcat: req.body.ailcat,
      ailcat_2: req.body.ailcat2,
      ailcat_3: req.body.ailcat3,
      aildet: req.body.aildet,
      blood: req.body.blood,
      dateofbirth: req.body.dob,
      emcon: req.body.emcon,
      gender: req.body.gender,
      status: req.body.status,
      assiDoc: req.body.assiDoc
    });
    pat.save().then(rest => {
      console.log('Patient added successfully');
      res.status(201).json({
        msg: 'Patient added successfully',
        detail: rest
      });
      console.log(rest);
      // Setting Address to send mail
      let SendTo = {
        from: 'athavan19794@gmail.com',
        to: req.body.email,
        subject: 'Adding patient',
        text: `You are registered as a patient: \n
              your login: \n
              username: ${req.body.email}\n
              password: ${req.body.pswd}`
      };
      // Sending the mail
      transporter.sendMail(SendTo).then(error => {
        console.log(`Mail has been send: \n ${SendTo.to}`);
      }).catch(error => {
        console.log(`Can not send mail to: ${SendTo.to}`);
        console.log(`Because ${error}`);
      });
    }).catch(err => {
      res.json({
        msg: 'Can not add'
      });
      // console.log(`Could not insert ${err}`);
    });
  });
});

// Adding receptionist
app.post('/addrec', (req, res, next) => {
  const pat = new Receptionist({
    uname: req.body.uname,
    email: req.body.email,
    pswd: req.body.pswd,
    phone: req.body.phone,
    address: req.body.address,
    dob: req.body.dob,
    age: req.body.age,
    gender: req.body.gender
  });
  pat.save().then(rest => {
    console.log('Receptionist added successfully');
    res.status(201).json({
      msg: 'Receptionist added successfully',
      detail: rest
    });
    console.log(rest);
    // Setting Address to send mail
    let SendTo = {
      from: 'athavan19794@gmail.com',
      to: req.body.email,
      subject: 'Adding Receptionist',
      text: `You are registered as a receptionist: \n
              your login: \n
              username: ${req.body.email}\n
              password: ${req.body.pswd}`
    };
    // Sending the mail
    transporter.sendMail(SendTo).then(error => {
      console.log(`Mail has been send: \n ${SendTo.to}`);
    }).catch(error => {
      console.log(`Can not send mail to: ${SendTo.to}`);
      console.log(`Because ${error}`);
    });
  }).catch(err => {
    res.json({
      msg: 'Can not add'
    });
    console.log(`Could not insert ${err}`);
  });
});

// Adding therapist
app.post('/addtherap', (req, res, next) => {
  const therap = new Therapist({
    uname: req.body.uname,
    email: req.body.email,
    pswd: req.body.pswd,
    phone: req.body.phone,
    address: req.body.address,
    dob: req.body.dob,
    age: req.body.age,
    gender: req.body.gender,
    status: req.body.status
  });
  therap.save().then(rest => {
    console.log('Therapist added successfully');
    res.status(201).json({
      msg: 'Therapist added successfully',
      detail: rest
    });
    console.log(rest);
    // Setting Address to send mail
    let SendTo = {
      from: 'athavan19794@gmail.com',
      to: req.body.email,
      subject: 'Adding Therapist',
      text: `You are registered as a therapist: \n
            your login: \n
            username: ${req.body.email}\n
            password: ${req.body.pswd}`
    };
    // Sending the mail
    transporter.sendMail(SendTo).then(error => {
      console.log(`Mail has been send: \n ${SendTo.to}`);
    }).catch(error => {
      console.log(`Can not send mail to: ${SendTo.to}`);
      console.log(`Because ${error}`);
    });
  }).catch(err => {
    res.json({
      msg: 'Can not add'
    });
    console.log(`Could not insert ${err}`);
  });
});

// Getting slots db.appointments.find().sort({$natural: -1}).limit(1)
app.get('/getslot/:id/:apdate', (req, res, next) => {
  console.log(req.params.id);
  console.log(req.params.apdate);
  console.log(req.params.time);
  Appointment.find({ doctorName: req.params.id, appDate: req.params.apdate }).then(result => {
      console.log(result);
      res.status(201).json({
        msg: 'slots fetched successfully',
        post: result
      });
    });
});

// addPresc
app.post('/addPresc', (req, res, next) => {
  const prescrip = new Prescription({
    patName: req.body.patName,
    patId: req.body.patId,
    patEmail: req.body.patEmail,
    bloodPresure: req.body.bloodPresure,
    docName: req.body.docName,
    docId: req.body.docId,
    docEmail: req.body.docEmail,
    presDate: req.body.presDate,
    mtype: req.body.mtype,
    ins: req.body.ins,
  });
  prescrip.save().then(rest => {
    console.log('Prescription added successfully');
    res.status(201).json({
      msg: 'Prescription added successfully',
      detail: rest
    });
    console.log(rest)
  }).catch(err => {
    res.json({
      msg: 'Can not add Prescription'
    });
    console.log(`Could not add Prescription ${err}`);
  });
});

// get all Prescriptions to show
app.get('/getPresc', (req, res, next) => {
  Prescription.find().then(result => {
    if (result.length > 0) {
      res.status(200).json({
        message: "Prescription fetched successfully!...",
        posts: result
      });
    }
  }).catch(err => {
    res.json({
      message: "Prescription not available!..."
    });
    console.log(`Prescription not available!... \n ${err}`);
  });;
});

// get given by doc Prescriptions to show
app.get('/getPrescforDoc/:id', (req, res, next) => {
  Prescription.find({ docEmail: req.params.id }).then(result => {
    if (result.length > 0) {
      res.status(200).json({
        message: "Prescription fetched successfully!...",
        posts: result
      });
      console.log(result);
    }
  }).catch(err => {
    res.json({
      message: "Prescription not available!..."
    });
    console.log(`Prescription not available!... \n ${err}`);
  });;
});

// get Prescriptions for patient to show
app.get('/getPrescforPat/:id', (req, res, next) => {
  Prescription.find({ patEmail: req.params.id }).then(result => {
    if (result.length > 0) {
      res.status(200).json({
        message: "Prescription fetched successfully!...",
        posts: result
      });
      console.log(result);
    }
  }).catch(err => {
    res.json({
      message: "Prescription not available!..."
    });
    console.log(`Prescription not available!... \n ${err}`);
  });;
});

//Admin login getting
app.get("/getLogin/:username/:pswd", (req, res, next) => {
  console.log(req.params.username);
  console.log(req.params.pswd);
  if (req.params.username != '' && req.params.pswd != '') {
    User.find({ userName: req.params.username, password: req.params.pswd }).then(documents => {
      if (documents.length > 0) {
        res.status(200).json({
          message: "Posts fetched successfully!...",
          posts: documents
        });
      }
    }).catch(err => {
      res.json({
        message: "Username password not available!..."
      });
      console.log(`Username password not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Username password can not be empty!..."
    });
  }
});

app.get("/getdoc/:eml", (req, res, next) => {
  console.log("Doctor Id " + req.params.eml);
  if (req.params.eml != '') {
    Doctor.find({ docid: req.params.eml }).then(documents => {
      if (documents.length > 0) {
        res.status(200).json({
          message: "Doctor fetched successfully!...",
          posts: documents
        });
        console.log(documents);
      }
    }).catch(err => {
      res.json({
        message: "Doctor not available!..."
      });
      console.log(`Doctor not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Doctor can not be empty!..."
    });
  }
});

app.get("/editdoc/:eml", (req, res, next) => {
  console.log("Email " + req.params.eml);
  if (req.params.eml != '') {
    Doctor.find({ docid: req.params.eml }).then(documents => {
      if (documents.length > 0) {
        res.status(200).json({
          message: "Doctor fetched successfully!...",
          posts: documents
        });
        console.log(documents);
      }
    }).catch(err => {
      res.json({
        message: "Doctor not available!..."
      });
      console.log(`Doctor not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Doctor can not be empty!..."
    });
  }
});

// getting Doctors
app.get("/getdoctor", (req, res, next) => {
  Doctor.find().then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
    } else {
      res.status(200).json({
        message: "Nothing to fetch",
      });
    }
  }).catch(err => {
    res.json({
      message: "Doctors not available!..."
    });
    console.log(`Doctors not available!... \n ${err}`);
  });
});

// getting Patients
app.get("/getpatient", (req, res, next) => {
  Patient.find().then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
      console.log(documents);
    }
  }).catch(err => {
    res.json({
      message: "patients not available!..."
    });
    console.log(` not available!... \n ${err}`);
  });
});

// getpatientforapp
app.get("/getpatientforapp/:name", (req, res, next) => {
  Patient.find({ assiDoc:req.params.name }).then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
      console.log(documents);
    }
  }).catch(err => {
    res.json({
      message: "patients not available!..."
    });
    console.log(` not available!... \n ${err}`);
  });
});

// getpatientname
app.get("/getpatientname/:id", (req, res, next) => {
  Patient.find({ pid: req.params.id }).then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
      console.log(documents);
    }
  }).catch(err => {
    res.json({
      message: "patients not available!..."
    });
    console.log(` not available!... \n ${err}`);
  });
});

// getpatient for prescription
app.get("/getpatient/:em", (req, res, next) => {
  Patient.find({ email: req.params.em }).then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
    }
  }).catch(err => {
    res.json({
      message: "patients not available!..."
    });
    console.log(` not available!... \n ${err}`);
  });
});

// getdoctor for prescription
app.get("/getdoc2/:eml", (req, res, next) => {
  // console.log("Doctor Id " + req.params.eml);
  Doctor.find({ email: req.params.eml }).then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Doctor fetched successfully!...",
        posts: documents
      });
      // console.log(documents);
    }
  }).catch(err => {
    res.json({
      message: "Doctor not available!..."
    });
    console.log(`Doctor not available!... \n ${err}`);
  });
});

// getting Receptionist
app.get("/getreceptionist", (req, res, next) => {
  Receptionist.find().then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
    }
  }).catch(err => {
    res.json({
      message: "Reception not available!..."
    });
    console.log(`Reception not available!... \n ${err}`);
  });
});

// getting Therapist
app.get("/gettherapist", (req, res, next) => {
  Therapist.find().then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
    }
  }).catch(err => {
    res.json({
      message: "Therapist not available!..."
    });
    console.log(`Therapist not available!... \n ${err}`);
  });
});


// getting Appointment list
app.get("/getappointlist", (req, res, next) => {
  Appointment.find().then(documents => {
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting  successfully!...",
        posts: documents
      });
    }
  }).catch(err => {
    res.json({
      message: "Appointment list not available!..."
    });
    console.log(`Appointment list not available!... \n ${err}`);
  });
});
// Patient login getPatientLogin
app.get("/getPatientLogin/:un/:pwd", (req, res, next) => {
  console.log(req.params.un + " " + req.params.pswd);
  if (req.params.un != '' && req.params.pswd != '') {
    Patient.findOne({ email: req.params.un }).then(documents => {
      console.log(documents);
      if (!documents) {
        res.status(401).json({
          message: 'Auth Failed',
        });
      }
      return bcrypt.compare(req.params.pswd, documents.pswd)
    }).then(result => {
      if(!result) {
        res.status(401).json({
          message: 'Auth Failed',
        });
      }
      const token = jwt.sign({email: documents.email, pid: documents.pid}, 'secret key should be longer', 
      { expiresIn: '1h' });
    }).catch(err => {
      res.status(401).json({
        message: 'Auth Failed',
      });
      console.log(`Username password not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Username password can not be empty!..."
    });
  }
});


// Doctor login getDoctorLogin
app.get("/getDoctorLogin/:un/:pswd", (req, res, next) => {
  console.log(req.params.un + " " + req.params.pswd);
  if (req.params.un != '' && req.params.pswd != '') {
    Doctor.find({ email: req.params.un, pswd: req.params.pswd }).then(documents => {
      if (documents.length > 0) {
        res.status(201).json({
          message: "Doctor fetched successfully!...",
          posts: documents
        });
      } else {
        res.status(201).json({
          message: "Nothing to fetch doctor",
        });
      }
      // console.log(documents);
    }).catch(err => {
      res.json({
        message: "Username password not available!..."
      });
      console.log(`Username password not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Username password can not be empty!..."
    });
  }
});


// getting assigned Doctors
app.get("/getassigndoc/:emil", (req, res, next) => {
  AssignDoctor.find({ docEmail: req.params.emil }).then(documents => {
    console.log(documents);
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting assigned doctors successfully!...",
        posts: documents
      });
    } else {
      res.status(200).json({
        message: "Nothing to fetch",
      });
    }
  }).catch(err => {
    res.json({
      message: "Doctors not available!..."
    });
    console.log(`Doctors not available!... \n ${err}`);
  });
});


// getting assigned Doctors
app.get("/getassignpat/:emil", (req, res, next) => {
  AssignDoctor.find({ patEmail: req.params.emil }).then(documents => {
    console.log(documents);
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting assigned doctors successfully!...",
        posts: documents
      });
    } else {
      res.status(200).json({
        message: "Nothing to fetch",
      });
    }
  }).catch(err => {
    res.json({
      message: "Doctors not available!..."
    });
    console.log(`Doctors not available!... \n ${err}`);
  });
});

// Assigned patients getAsPatient
app.get("/getAsPatient/:emil", (req, res, next) => {
  Patient.find({ email: req.params.emil }).then(documents => {
    console.log(documents);
    if (documents.length > 0) {
      res.status(200).json({
        message: "Getting assigned doctors successfully!...",
        posts: documents
      });
    } else {
      res.status(200).json({
        message: "Nothing to fetch",
      });
    }
  }).catch(err => {
    res.json({
      message: "Doctors not available!..."
    });
    console.log(`Doctors not available!... \n ${err}`);
  });
});


//Geting Receptionist (getReceLogin)
app.get("/getReceLogin/:un/:pwd", (req, res, next) => {
  console.log(req.params.un + " " + req.params.pswd);
  if (req.params.un != '' && req.params.pswd != '') {
    Receptionist.find({ email: req.params.un, pswd: req.params.pwd }).then(documents => {
      if (documents.length > 0) {
        res.status(201).json({
          message: "Detail fetched successfully!...",
          posts: documents
        });
      } else {
        res.status(201).json({
          message: "Nothing to fetch",
        });
      }
    }).catch(err => {
      res.json({
        message: "Username password not available!..."
      });
      console.log(`Username password not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Username password can not be empty!..."
    });
  }
});

// getTherapLogin
app.get("/getTherapLogin/:un/:pwd", (req, res, next) => {
  console.log(req.params.un + " " + req.params.pswd);
  if (req.params.un != '' && req.params.pswd != '') {
    Therapist.find({ email: req.params.un, pswd: req.params.pwd }).then(documents => {
      if (documents.length > 0) {
        res.status(201).json({
          message: "Detail fetched successfully!...",
          posts: documents
        });
      } else {
        res.status(201).json({
          message: "Nothing to fetch",
        });
      }
    }).catch(err => {
      res.json({
        message: "Username password not available!..."
      });
      console.log(`Username password not available!... \n ${err}`);
    });
  } else {
    res.json({
      message: "Username password can not be empty!..."
    });
  }
});

// app.use("", UserRoutes);


module.exports = app;
