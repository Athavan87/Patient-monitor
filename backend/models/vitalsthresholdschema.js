// Dependency for mongoose
const mongoose = require('mongoose');

// Schema for vitals
const thresholdSchema = new mongoose.Schema({
  bodyTemp: { type: Number, required: true },
  pulseRate: { type: Number, required: true },
  respRate: { type: Number, required: true },
  bloodPressure: { type: Number, required: true },
});

//Model export  for schema
module.exports = mongoose.model('patientVital', thresholdSchema);
