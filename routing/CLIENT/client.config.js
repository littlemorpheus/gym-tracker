const mongoose = require('mongoose');
exports.CLIENT_DB = mongoose.createConnection(process.env.CLIENT_MONGODB_URI)
//    .then(res => console.log("Connected to Database"))
//    .catch(err => console.log('Error in Database connection:\n' + err))