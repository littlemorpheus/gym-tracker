const mongoose = require('mongoose');

/*                Mongoose Setup                */
mongoose.connect(process.env.MONGODB_URI)
    .then(res => console.log("Connected to Database"))
    .catch(err => console.log('Error in Database connection:\n' + err))

