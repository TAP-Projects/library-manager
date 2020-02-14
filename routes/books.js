var express = require('express');
var router = express.Router();
var books = require('../library.json');

/* GET all books page. */
router.get('/', function(req, res, next) {
  res.render('AllBooks', {books});
});

module.exports = router;