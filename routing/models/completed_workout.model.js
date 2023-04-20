const mongoose = require('mongoose');

/* Completed Workout Model */
/* TODO: Change to represent a completed_workout */
const completedWorkoutSchema = mongoose.Schema( {
    /* Foreign Key for User */
    /* Foreign Key for Workout */
    /* TODO: Add Foreign Key for Comment */
});

const CompletedWorkout = module.exports = mongoose.model('CompletedWorkout', completedWorkoutSchema);