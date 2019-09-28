// Dependency for mongoose
const mongoose = require('mongoose');
// Dependency for mongoose-unique-validattor
const uniqueValidator = require('mongoose-unique-validator');

// Schema for patient
const patientSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  pid: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  pswd: { type: String, required: true },
  address: { type: String, required: true },
  attname: { type: String, required: true },
  attphone: { type: Number, required: true },
  ailcat: { type: String, required: true },
  ailcat_2: { type: String },
  ailcat_3: { type: String },
  aildet: { type: String, required: true },
  blood: { type: String, required: true },
  dateofbirth: { type: String, required: true },
  emcon: { type: Number, required: true },
  gender: { type: String, required: true },
  status: { type: String, required: true },
  assiDoc: { type: String, required: true }
});

// Checking unique validator
patientSchema.plugin(uniqueValidator);

// Model exports for schema
module.exports = mongoose.model('patient', patientSchema);
