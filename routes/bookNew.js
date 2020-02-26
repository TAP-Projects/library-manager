const express = require('express');
const router = express.Router();
const models = require('../models');
const asyncHandler = require('../scripts');

// GET new book form page
router.get('/', function(req, res, next) {
    res.render('NewBook', {title: "Add Book"});
});

// POST new book data
router.post('/', asyncHandler(async (req, res, next) => {
    const book = await models.Book.create(req.body);
    res.redirect('/books/' + book.id);
}));

module.exports = router;