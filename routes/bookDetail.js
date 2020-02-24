var express = require('express');
var router = express.Router();
// Import the model instance
var Books = require('../models/index.js').Books;


/* GET book detail page. */
router.get('/', function(req, res, next) {
    // Store the requested book's id
    const theId = req.params.id * 1;
    // Find the matching book using modelInstance.findByPk()
    const book = Books.findById(theId)
    console.log("The matched book item: ", book);
    // Render the book detail view with the requested book's details
    res.render('BookDetail', {book});
});

router.post('/', function(req, res, next) {});

module.exports = router;
