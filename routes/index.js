var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('index', { title: "Fatima Kaleem" });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' })
});

/* GET About Me page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('AboutMe', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/ContactMe', function(req, res, next) {
  res.render('ContactMe', { title: 'Contact me' });
});


module.exports = router;
