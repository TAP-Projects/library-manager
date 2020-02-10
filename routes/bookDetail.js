var express = require('express');
var router = express.Router();
var books = require('../library.json');

/* GET book detail page. */
router.get('/', function(req, res, next) {
    // Store the requested book's id
    const theId = req.params.id * 1;
    // Find the matching book id among all books
    const theBook = books.find(book => book.id === theId);
    // Render the book detail view with the requested book's details
    res.render('BookDetail', {book: theBook});
});

router.post('/', function(req, res, next) {});

module.exports = router;
