'use strict';
var express = require('express');
var ECT = require('ect');
var app = express();
var bird = require('./routes/bird');
var book = require('./routes/book');
var ectRenderer = ECT({
  'watch': true,
  'root': __dirname + '/views',
  'ext': '.ect'
});

app.get('/', function (req, res) {
  res.render(
    'page', {
      title : 'Hello, world!',
      id : 'main',
      links: [
        { name : 'Google', url : 'http://google.com/' },
        { name : 'Facebook', url : 'http://facebook.com/' },
        { name : 'Twitter', url : 'http://twitter.com/' }
      ],
      upperHelper : function (string) {
        return string.toUpperCase();
      }
  });
});

app.engine('ect', ectRenderer.render);
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ect');

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
