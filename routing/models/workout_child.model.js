const mongoose = require('mongoose');
const exerciseSchema = require('../models/exercise.model').exerciseSchema

var varationSchema = new mongoose.Schema({
    key: { 
        type: String, 
        required: [true, "Variation key is required"] 
    },
    value: { 
        type: mongoose.Types.ObjectId, 
        required: [true, "Variation key is required"],
        ref: 'Exercise' 
    }
})

const workoutchildSchema = mongoose.Schema( {
    name: { 
        type: String, 
        required: [true, "Name is required"], 
        unique: true 
    },
    variations: {
        type: [varationSchema],
        required: [true, "Need some exercises"]
    },
    overall_reps: { type: Number },
    minimum_reps: { type: Number },

    //Record Keeping
    date_added: {type: Date, default: Date.now()}
});

const Workout_Child = module.exports = mongoose.model('Workout Child', workoutchildSchema);
