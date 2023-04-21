const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

/* Exercise Model */
const exerciseSchema = mongoose.Schema( {
    name: { type: String, required: true },
    type: { type: String, required: true },/* Possibly an enum */
    muscle: { type: String, required: true },/* Possibly an enum */
    equipment: { type: String, required: true },/* Possibly an enum */
    difficulty: { type: String, required: true },/* Possibly an enum */
    instructions: { type: String, required: true },
    user: { type: ObjectId, ref: 'User' },
});

const Exercise = module.exports = mongoose.model('Exercise', exerciseSchema);