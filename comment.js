// Create web server
var express = require('express');
var app = express();
var port = 3000;

// Server start
app.listen(port, function(){
    console.log('Server Start! port: ' + port);
});

// Set static file directory
app.use(express.static('public'));

// Set body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Set mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '111111',
    database : 'jsman'
});

connection.connect();

// Set router
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile); // ejs template engine

// Set URL
app.get('/', function(req, res){
    res.render('index.html');
});

app.post('/form', function(req, res){
    res.render('email.ejs', {'email' : req.body.email});