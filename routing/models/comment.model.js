const mongoose = require('mongoose');

/* Comment Model */
const commentSchema = mongoose.Schema( {
    text: { type: String },
    /* This is one to one, is it even necessary? */
    /* Unless I make it so that mutiple comments  */
});

const Comment = module.exports = mongoose.model('Comment', commentSchema);