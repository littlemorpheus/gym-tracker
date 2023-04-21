const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

/* Completed Set */
const completedSetSchema = mongoose.Schema( {
    rep_counter: { type: Number, required: true },
    completed_exercise: { type: ObjectId, ref: 'CompletedExercise', required: true },
    comment: { type: String },
});

const CompletedSet = module.exports = mongoose.model('CompletedSet', completedSetSchema);