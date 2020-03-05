const express = require('express');
const router = express.Router();
const models = require('../models');
const asyncHandler = require('../scripts')

/* GET book detail page. */
router.get('/:id', asyncHandler(async (req, res, next) => {
    
    // Store the requested book's id
    const theId = req.params.id;
    
    // Find the matching book using modelInstance.findByPk()
    const book = await models.Book.findByPk(theId)
    
    // Render the book detail view with the requested book's details
    res.render('BookDetail', {book, title: book.title});
}));

router.post('/:id', asyncHandler( async (req, res, next)=>{

    const theId = req.params.id;
    const book = await models.Book.findByPk(theId);
    await book.update(req.body);
    res.redirect('/books/' + book.id);

} ));

module.exports = router;
