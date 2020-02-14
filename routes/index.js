var express = require('express');
var router = express.Router();
var books = require('../library.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home', { books });
});

module.exports = router;
