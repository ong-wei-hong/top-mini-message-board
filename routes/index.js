const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date()
	},
	{
		text: 'Hello world!',
		user: 'Charles',
		added: new Date()
	}
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', (req, res, next) => {
	messages.unshift({
		text: req.body.message,
		user: req.body.name,
		added: new Date()
	})
	res.redirect('/')
});

module.exports = router;
