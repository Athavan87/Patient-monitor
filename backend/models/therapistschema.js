// Dependency for mongoose
const mongoose = require('mongoose');

// Schema for therapist
const addTherapist = new mongoose.Schema({
  uname: { type: String, required: true },
  email: { type: String, required: true },
  pswd: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  status: { type: String, required: true }
});

//Model export  for schema
module.exports = mongoose.model('therapist', addTherapist);
