const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { type: String, required: [true, "Name is required"], unique: [true, "The name needs to be unique"] },
    description: { type: String },
    private: { type: Boolean }

    /* TODO: Add Foreign Key for User */
});

const Workout = module.exports = mongoose.model('Workout', workoutSchema);