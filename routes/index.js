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
  // res.next();
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Enter Your Message'});
});

router.post('/new', function(req, res, next) {
  let auth = req.body;
  // console.log(auth);
});

module.exports = router;
