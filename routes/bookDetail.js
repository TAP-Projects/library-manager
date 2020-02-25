var express = require('express');
var router = express.Router();
// Import the model instance
var allModels = require('../models');


/* GET book detail page. */
router.get('/', async function(req, res, next) {
    // Store the requested book's id
    //const theId = parseInt(req.params.id * 1, 10);
    console.log("The id is: ", req.params.id);
   // console.log("The response is: ", res);
    // Find the matching book using modelInstance.findByPk()
    const book = await allModels.Book.findByPk(2)
    // console.log("The matched book item: ", book);
    // Render the book detail view with the requested book's details
    res.render('BookDetail', {book});
});

// router.post('/', function(req, res, next) {});

module.exports = router;
