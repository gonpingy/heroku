'use strict';
var
  express = require('express'),
  router = express.Router();

var get = function (req, res) {
  res.send('Get a random book');
};

var post = function (req, res) {
  res.send('Add a book');
};

var put = function (req, res) {
  res.send('Update the book');
};

router
  .route('/')
  .get(get)
  .post(post)
  .put(put);

module.exports = router;
module.exports.get = get;
module.exports.post = post;
module.exports.put = put;
