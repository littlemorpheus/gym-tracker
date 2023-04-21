const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

/* Completed Workout Model */
const completedWorkoutSchema = mongoose.Schema( {
    user: { type: ObjectId, ref: 'User', required: true },
    workout: { type: ObjectId, ref: 'Workout', required: true },
    comment: { type: String }
});

const CompletedWorkout = module.exports = mongoose.model('CompletedWorkout', completedWorkoutSchema);