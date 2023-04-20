//check env
require('dotenv').config();

var env = process.env.NODE_ENV || 'development';
console.log("NODE_ENV=" + process.env.NODE_ENV)