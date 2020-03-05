const express = require('express');
const router = express.Router();
const models = require('../models');
const asyncHandler = require('../scripts');

/* GET all books page. */
router.get('/', asyncHandler( async (req, res, next) => {
  
  const books = await models.Book.findAll({order: [['createdAt', 'DESC']]});
  res.render('AllBooks', {books, title: "Library"});
  next();

}));

module.exports = router;