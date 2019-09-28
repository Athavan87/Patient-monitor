// Dependency for mongoose
const mongoose = require('mongoose');

// Schema for doctor
const addDoc = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  fname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  docid: { type: String, required: true, unique: true },
  pswd: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  spliz: { type: String, required: true },
  ailcat: { type: String, required: true },
  blood: { type: String, required: true },
  dob: { type: String, required: true },
  emcon: { type: String, required: true },
  gender: { type: String, required: true },
  status: { type: String, reqiured: true },
  timeSchedule: [{
    dayofWeek: {
      sunDay: { type: Boolean },
      monDay: { type: Boolean },
      tuesDay: { type: Boolean },
      wednessDay: { type: Boolean },
      thursDay: { type: Boolean },
      friDay: { type: Boolean },
      saturDay: { type: Boolean }
    },
    startTime: { type: String, reqiured: true },
    endTime: { type: String, reqiured: true },
  }]
});

//Model export  for schema
module.exports = mongoose.model('doctor', addDoc);
