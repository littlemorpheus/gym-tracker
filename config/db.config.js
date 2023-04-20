const mongoose = require('mongoose');

/*                Mongoose Setup                */
const URI = process.env.DB_USERNAME && process.env.DB_PASSWORD
    ? `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`
    : `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

mongoose.connect(URI)
    .then(res => console.log("Connected to Database"))
    .catch(err => console.log('Error in Database connection:\n' + err))

