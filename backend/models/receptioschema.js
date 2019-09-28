// Dependency for mongoose
const mongoose = require('mongoose');

// Schema for receptionist
const addReception = new mongoose.Schema({
  uname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pswd: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true }
});

//Model export  for schema
module.exports = mongoose.model('receptionist', addReception);
