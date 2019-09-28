// Dependency for mongoose
const mongoose = require('mongoose');

// Schema for doctor assignment
const assignDoc = new mongoose.Schema({
    docName: { type: String, required: true },
    patName: { type: String, required: true },
    docEmail: { type: String, required: true },
    patEmail: { type: String, required: true },
    docContact: { type: Number, required: true },
    patContact: { type: Number, required: true },
    patAddress: { type: String, required: true },
    patStatus: { type: String, required: true },
    assignDate: { type: Date, required: true }
});

//Model export  for schema
module.exports = mongoose.model('assigndoctor', assignDoc);
