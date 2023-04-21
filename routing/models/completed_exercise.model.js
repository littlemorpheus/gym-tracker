const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

/* Completed Exercise Model */
const completedExerciseSchema = mongoose.Schema( {
    order: { type: Number, required: true },
    comment: { type: String },
    completed_workout: { type: ObjectId, ref: 'CompletedWorkout', required: true },
    exercise: { type: ObjectId, ref: 'Exercise', required: true }
});

const CompletedExercise = module.exports = mongoose.model('CompletedExercise', completedExerciseSchema);