
var express = require('express');
var staticResourcesConfig = require("./server/configurations/static-resources");
var port = process.env.PORT || 8000; 		        // set the port
var mongoose = require('mongoose'); 				// mongoose for mongodb
var app = express();
var morgan = require("morgan");

staticResourcesConfig(app);

app.use(morgan('dev'));                             // log every request to the console
app.use(express.static('./client'));

app.listen(port);

console.log('hello big data ' + port);