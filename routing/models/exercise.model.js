const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema( {
    name: { 
        type: String, 
        required: [true, 'Name Required'], 
        unique: true 
    },
    
    videos: [ { type: mongoose.Types.ObjectId, ref: 'Image' } ],
    images: [ { type: mongoose.Types.ObjectId, ref: 'Image' } ],

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Exercise = module.exports = mongoose.model('Exercise', exerciseSchema);