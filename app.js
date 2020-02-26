var path = require('path');
var express = require('express');
var logger = require('morgan');
var compression = require('compression');
var helmet = require('helmet');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var createError = require('http-errors');
var favicon = require('serve-favicon');

var app = express();

// view engine setup. look for views in this directory and the specified subdirectories
app.set('views', [
  path.join(__dirname, 'views'), 
  path.join(__dirname, 'views/pages'), 
  path.join(__dirname, 'views/components')
]);
app.set('view engine', 'pug');

app.use(helmet()); // Set HTTP headers for security
app.use(favicon(path.join(__dirname, "public", "favicon.ico"))); // Serve the favicon
app.use(compression()); // Compress all routes
app.use(cookieParser()); // Parse cookies
app.use(logger('dev')); // Log errors
app.use(bodyParser.json()); // Parse the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var allBooksRouter = require('./routes/books');
var newBookRouter = require('./routes/bookNew');
var bookDetailRouter = require('./routes/bookDetail');

app.use('/', indexRouter);
app.use('/books/new', newBookRouter);
app.use('/books', allBooksRouter, bookDetailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
