const express = require('express');
const router = express.Router();

// middleware specific to this router
const timeLog = function timeLog(req, res, next) {
  next();
};

const root = function root(req, res) {
  res.send('Birds home page');
};

const about = function about(req, res) {
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
