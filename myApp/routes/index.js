var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res, next){
	res.send('This is a post!');
});

router.put('/put', function(req, res, next){
	res.send('This is a put!');
});

router.delete('/', function(req, res, next){
	res.send('This is a update!');
});

module.exports = router;
