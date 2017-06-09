
var express = require('express');
var staticResourcesConfig = require("./configurations/staticResourcesConfig");
var port = process.env.PORT || 8000; 		        // set the port
var mongoose = require('mongoose'); 				// mongoose for mongodb
var app = express();

//staticResourcesConfig(app);

app.use(express.static('./public'));
app.listen(port);
console.log('hello big data ' + port);