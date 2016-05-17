const express = require('express');
const ECT = require('ect');
const app = express();
const bird = require('./routes/bird');
const book = require('./routes/book');
const ectRenderer = ECT({
  watch: true,
  root: `${__dirname}/views`,
  ext: '.ect',
});

app.get('/', (req, res) => {
  res.render(
    'page', {
      title: 'Hello, world!',
      id: 'main',
      links: [
        { name: 'Google', url: 'http://google.com/' },
        { name: 'Facebook', url: 'http://facebook.com/' },
        { name: 'Twitter', url: 'http://twitter.com/' },
      ],
      upperHelper: function upperHelper(string) {
        return string.toUpperCase();
      },
    });
});

app.engine('ect', ectRenderer.render);
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ect');

const cb0 = function cb0(req, res, next) {
  next();
};

const cb1 = function cb1(req, res, next) {
  next();
};

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  next();
}, (req, res) => {
  res.send('Hello from D!');
});

app.use('/bird', bird);
app.use('/book', book);
app.use(express.static(`${__dirname}/public`));

module.exports = app;

if (!module.parent) {
  app.listen(app.get('port'), () => {
    // console.log('Node app is running on port', app.get('port'));
  });
}
