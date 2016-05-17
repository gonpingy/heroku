const express = require('express');
const router = express.Router();

const get = function get(req, res) {
  res.send('Get a random book');
};

const post = function post(req, res) {
  res.send('Add a book');
};

const put = function put(req, res) {
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
