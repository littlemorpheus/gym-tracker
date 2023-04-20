/* Project Schema */
const mongoose = require('mongoose');

const ImgSchema = mongoose.Schema( {
    //In Future needs its own model
    name: { type: String, required: true },
    path: { type: String },
    media_type: { type: String },
    decription: { type: String },
    upload_date: { type: Date, default: Date.now() }
});

const Image = module.exports = mongoose.model('Image', ImgSchema);