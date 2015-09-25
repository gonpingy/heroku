'use strict';
var
  express = require('express'),
  router = express.Router();

// middleware specific to this router
var timeLog = function (req, res, next) {
  console.log('Time: ', Date.now());
  console.log('path: ', req.baseUrl);
  next();
};

var root = function (req, res) {
  res.send('Birds home page');
};

var about = function (req, res) {
  res.send('About birds');
};

// define the home page route
router.get('/', root);

// define the about route
router.get('/about', about);

router.use(timeLog);

module.exports = router;
module.exports.about = about;
module.exports.root = root;
module.exports.timeLog = timeLog;
