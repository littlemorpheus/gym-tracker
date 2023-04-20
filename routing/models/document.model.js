const mongoose = require('mongoose');

/* Document Schema */
const documentSchema = mongoose.Schema( {
    //In Future needs its own model
    name: { type: String, required: true },
    path: { type: String },
    disk: { type: String },
    mime: { type: String },
    bytes: { type: Number },
    /* TODO: Foreign Key for Users */
});

const Document = module.exports = mongoose.model('Document', documentSchema);