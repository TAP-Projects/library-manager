var express = require('express');
var router = express.Router();

/* GET all books page. */
router.get('/', function(req, res, next) {
  res.render('AllBooks');
});

module.exports = router;