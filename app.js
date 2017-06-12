var express         = require('express');
var path            = require('path');
var favicon         = require('serve-favicon');
var logger          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser');
var dotenv          = require('dotenv').config();
var routes          = require('./server/routes/index');
var schema          = require('./server/routes/schema');
var upload          = require('./server/routes/upload');
var swig            = require('swig');
var mongoose        = require('mongoose');
var cors            = require('cors');

mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DB);

var app = express();
app.use(cors())

// assign the swig view engine to .html files...
app.engine('html', swig.renderFile);

// view engine setup
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));
app.use('/builder', express.static(path.join(__dirname, 'JSON-Schema-Builder/docs')));

app.use('/', routes);
app.use('/schema', schema);
app.use('/upload', upload);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
