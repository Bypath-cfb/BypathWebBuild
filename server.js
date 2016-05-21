// Includes
var express = require('express');
var ejs = require('ejs');

var routes = require('./routes.js');

// private memeber vars
var app;
var port;

// public methods
app = express();

app.set('views', __dirname);
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', routes);

function start (){
    port = process.env.PORT || 8080;
    console.log('rest server module started');
    var server = app.listen(port, function(){
        console.log('Server started on port: ' + port);
    });
}

start();