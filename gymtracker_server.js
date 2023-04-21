/* TODOs */
/*
1. Implement Foreign Keys
2. Implement controller functions
3. Implement routes
4. 
5. 
6. 
*/

/*            Configuration            */
require('./config/config');
require('./config/db.config');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

/*    Dependency Installation    */
const express = require('express');
const router = express.Router();
const apiRoute = require('./routing/routes/index.route')
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

/*                Express Setup                */
const app = new express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}) );

/*               STATIC folder access                */
app.use('/api', apiRoute);
//app.use('/res', express.static(path.join(__dirname, "/res/")));
//app.use('/styles', express.static(path.join(__dirname, "/res/styles/")));
//app.use('/scripts', express.static(path.join(__dirname, "/res/scripts/")));
//app.use('/media', express.static(path.join(__dirname, "/res/media/")));
app.use(express.static(path.join(__dirname, "/dist/")));

/*                Requests                */

            /*      GET     */ 
//app.get('*', function(req, res) {
//    res.sendFile(path.join(__dirname, '/dist/index.html'));
//}); 

app.listen(port, hostname, () => {
    let date = new Date();
    console.log(`Starting at ${date.toDateString()} ${date.toTimeString()}`);
    console.log(`Server running at http://${hostname}:${port}/`);
});