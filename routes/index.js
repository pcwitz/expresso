var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'home' });
});

/* GET speakers page. */
router.get('/speakers', function(req, res) {
  res.render('speakers', { title: 'speakers' });
});

module.exports = router;
