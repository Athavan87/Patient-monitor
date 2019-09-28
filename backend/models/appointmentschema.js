// Dependency for mongoose
const mongoose = require('mongoose');

// Schema for receptionist
const appointmentSchema = new mongoose.Schema({
  doctorName: { type: String },
  appDate: String,
  time: String,
  patName: { type: String },
  patId: { type: String },
  problem: { type: String },
  status: { type: String }
});

//Model export  for schema
module.exports = mongoose.model('appointment', appointmentSchema);
