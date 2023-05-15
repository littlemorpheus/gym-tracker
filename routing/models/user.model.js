const mongoose = require('mongoose');

/* User Model */
/* TODO: Change to represent a user */
/* TODO: Decide whether to build from scratch to test skills and teach, or whether to just use a library */
const userSchema = mongoose.Schema( {
    display_name: { type: String, required: [true, 'Name Required'] },
    name: { type: String },
    email: { type: String, required: [true, 'Email Required'], unique: [true, 'Email needs to be unique'] },
    /* TODO: Implement password stuff */
    password: { type: String, required: [true, 'Password Required'] },
});

const User = module.exports = mongoose.model('User', userSchema);
/* Users can create new workouts */
/* Users can create new exercises */
/* Users can create store exercises (from API) */
/* Users can privatise or publicise workouts they created */

/* Maybe Guest can create workouts but only locally, so not saved on the back */