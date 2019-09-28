// Dependency for mongoose
const mongoose = require('mongoose');

// Schema for receptionist
const prescription = new mongoose.Schema({
    patName: { type: String, required: true },
    patId: { type: String, required: true },
    patEmail: { type: String, required: true },
    bloodPresure: { type: Number, required: true },
    docName: { type: String, required: true },
    docId: { type: String, required: true },
    docEmail: { type: String, required: true },
    presDate: { type: Date, required: true },
    mtype: { type: String, required: true },
    ins: { type: String, required: true }
});

//Model export  for schema
module.exports = mongoose.model('prescription', prescription);
