const mongoose = require('mongoose');

/* Example Model */
/* TODO: Change to represent a set */
const /* Schema Name */ = mongoose.Schema( {

    name: {  type: String, 
        required: [true, 'Name Required'], 
        unique: true 
    },
    
});

const /* Model Name */ = module.exports = mongoose.model(/* Model Name */, /* Schema Name */);