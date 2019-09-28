// Dependency for mongoose
const mongoose = require('mongoose');

//Schema for admin
const adminSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	password: { type: String, required: true }
});

//Model export  for schema
module.exports = mongoose.model('admin', adminSchema);
