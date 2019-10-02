// Setup ===================================================
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken');
const database = require('./db/database');
const mysql = require('mysql');
const cors = require('cors');


//CONFIG====================================================
let port = process.env.PORT || 8080;
app.use(cors());									
app.use(bodyParser.urlencoded({'extended':'true'})); 			
app.use(bodyParser.json()); 									
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
// app.use(methodOverride());

// Routes ==================================================
require('./app/routes.js')(app,jwt,database,mysql); /**IIFE ;) */

// server run port =========================================
app.listen(port, ()=>{
  console.log(`Testing, testing, one, two, testing...is this thing on? Listening on ${port}`);
  
});
