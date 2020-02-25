var express = require('express');
var router = express.Router();
var allModels = require('../models');

/* GET all books page. */
router.get('/', async function(req, res, next) {
  // Use the modelInstance.findAll() method to get the books
  const books = await allModels.Book.findAll()
  // console.log('\x1b[33m%s\x1b[0m', "From the Books Route: ", allModels.Book)
  res.render('AllBooks', {books});
});

module.exports = router;