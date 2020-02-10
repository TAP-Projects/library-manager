var express = require('express');
var router = express.Router();

/* GET new book form page. */
router.get('/', function(req, res, next) {
    res.render('NewBook');
});

router.post('/', function(req, res, next){

})

module.exports = router;