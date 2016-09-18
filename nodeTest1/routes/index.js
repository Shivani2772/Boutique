var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * GET Hello World Page
*/
router.get('/helloWorld', function(req, res) {
	res.render('HelloWorld', {title: 'Hello World! '});
});

module.exports = router;
