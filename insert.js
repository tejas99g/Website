var express = require('express')
  , routes = require('./routes')
  , controls = require('./routes/controls')
  , http = require('http')
  , path = require('path');
var app = express();
var mysql = require('mysql');
var bodyParser =require("body-parser");
var pool = mysql.createConnection({
    connectionLimit: 100,
    host: 'localhost',
    database: 'vehicluster',
    user: 'motor',
    password: '',
    debug: false  
});

pool.connect();



// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/vehicle', controls.vehicle);
//Middleware
app.listen(8080)