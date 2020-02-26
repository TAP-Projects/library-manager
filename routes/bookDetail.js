const express = require('express');
const router = express.Router();
const models = require('../models');
const asyncHandler = require('../scripts')

/* GET book detail page. */
router.get('/:id', asyncHandler( async (req, res, next) => {
    const book = await models.Book.findByPk(req.params.id)
    res.render('BookDetail', {book, title: book.title});
}));

router.post('/:id', asyncHandler( async (req, res, next) => {
    const book = await models.Book.findByPk(req.params.id);
    await book.update(req.body);
    res.redirect(`/books/${book.id}`);
    return;
} ));

module.exports = router;
