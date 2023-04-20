const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        unique: true 
    },
    sections: [ { type: mongoose.Types.ObjectId, ref:'Workout Child' } ],

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Workout = module.exports = mongoose.model('Workout', workoutSchema);