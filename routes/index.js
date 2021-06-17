var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Shelly",
    added: new Date()
  },
  {
    text: "Hello!",
    user: "Odel",
    added: new Date()

  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message board', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.usertext, 
    user: req.body.author, 
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
