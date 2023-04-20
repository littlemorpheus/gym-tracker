const mongoose = require('mongoose');

/* Completed Exercise Model */
/* TODO: Change to represent a completed_exercise */
const completedExerciseSchema = mongoose.Schema( {
    order: { type: Number },
    /* TODO: Add Foreign Key for Completed Workout */
    /* TODO: Add Foreign Key for Exercise */
    /* TODO: Add Foreign Key for Comment */
});

const CompletedExercise = module.exports = mongoose.model('CompletedExercise', completedExerciseSchema);