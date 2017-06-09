#!/usr/bin/env node
var debug = require('debug')('standup');
var app   = require('../app');

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port);
});
