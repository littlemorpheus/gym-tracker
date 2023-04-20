const mongoose = require('mongoose');

/* Exercise Model */
const exerciseSchema = mongoose.Schema( {
    name: { type: String, required },
    type: { type: String, required },/* Possibly an enum */
    muscle: { type: String, required },/* Possibly an enum */
    equipment: { type: String, required },/* Possibly an enum */
    difficulty: { type: String, required },/* Possibly an enum */
    instructions: { type: String, required }
    /* Others? */
});

const Exercise = module.exports = mongoose.model('Exercise', exerciseSchema);