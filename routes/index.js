var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('index', { title: "Fatima Kaleem" });
  res.sendFile('home.ejs')
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
  res.sendFile('home.ejs')
});

/* GET About Me page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('index', { title: 'About Me' });
  res.sendFile('AboutMe.ejs')
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
  res.sendFile('Projects.ejs')
});

/* GET Contact Me page. */
router.get('/ContactMe', function(req, res, next) {
  res.render('index', { title: 'Contact me' });
  res.sendFile('ContactMe.ejs')
});


module.exports = router;
