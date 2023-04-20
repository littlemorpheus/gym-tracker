/*            Configuration            */
require('./config/config');
require('./config/db.config');
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

/*    Dependency Installation    */
const express = require('express');
const router = express.Router();
const route = require('./routing/routes/index.route')
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

/*                Express Setup                */
const app = new express();
    app.set('view-engine', 'ejs');
    app.use(cors()); //Something about Cors is fucking things up
    app.use(express.json());
    app.use(express.urlencoded({extended: false}) );//URL encoded

/*               STATIC folder access                */
app.use('/api', route);
app.use('/res', express.static(path.join(__dirname, "/res/")));
app.use('/styles', express.static(path.join(__dirname, "/res/styles/")));
app.use('/scripts', express.static(path.join(__dirname, "/res/scripts/")));
app.use('/media', express.static(path.join(__dirname, "/res/media/")));
app.use(express.static(path.join(__dirname, "/dist/")));

/*                Requests                */
//Note: Not sure on the best way to perform API calls so using the HTTP library
            /*      GET     */ 
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
}); 

            /*      POST     */
            /*      PUT     */
            /*      DELETE     */
app.listen(port, hostname, () => {
    let date = new Date();
    console.log(`Starting at ${date.toDateString()} ${date.toTimeString()}`);
    console.log(`Server running at http://${hostname}:${port}/`);
  });