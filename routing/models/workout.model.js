const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const workoutSchema = mongoose.Schema( {
    //Key and Sub Parts
    name: { type: String, required: [true, "Name is required"], unique: [true, "The name needs to be unique"], required: true },
    description: { type: String },
    private: { type: Boolean, default: false }, /* TODO: Change to privatise or publicise at */
    user: { type: ObjectId, ref: 'User', required: true },

    /* TODO: Add Foreign Key for User */
});

const Workout = module.exports = mongoose.model('Workout', workoutSchema);