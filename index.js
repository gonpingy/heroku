'use strict';
var express = require('express');
var app = express();
var bird = require('./routes/bird');
var book = require('./routes/book');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.set('port', (process.env.PORT || 5000));

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

app.use('/bird', bird);
app.use('/book', book);

module.exports = app;

if (!module.parent) {
  app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
  });
}
