var express = require('express');
var router = express.Router();
var Books = require('../models');

/* GET all books page. */
router.get('/', function(req, res, next) {
  // Use the modelInstance.findAll() method to get the books
  const books = Books.Book.findAll()
  console.log('\x1b[33m%s\x1b[0m', "From the Books Route: ", books)
  res.render('AllBooks', {books});
});

module.exports = router;