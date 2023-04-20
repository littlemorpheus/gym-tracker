const mongoose = require('mongoose');

/* Completed Set */
/* TODO: Change to represent a completed_set */
const completedSetSchema = mongoose.Schema( {
    rep_counter: { type: Number, required },
    /* TODO: Add Foreign Key for Completed Exercise */
    /* TODO: Add Foreign Key for Comment */
});

const CompletedSet = module.exports = mongoose.model('CompletedSet', completedSetSchema);