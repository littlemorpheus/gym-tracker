const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

/* Document Schema */
const documentSchema = mongoose.Schema( {
    name: { type: String, required: true },
    path: { type: String, required: true },
    disk: { type: String },
    mime: { type: String, required: true },
    bytes: { type: Number, required: true },
    user: { type: ObjectId, ref: 'User' }
});

const Document = module.exports = mongoose.model('Document', documentSchema);