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

/* GET linkedIn page. */
router.get('/LinkedIn', function(req, res, next) {
  res.render('https://www.linkedin.com/in/fatima-kaleem-44630320a/', { title: 'LinkedIn' });
});

/* GET github page. */
router.get('/github', function(req, res, next) {
  res.render('https://github.com/fatimaaaaaaaaaaaaaaaaaaaaa', { title: 'github' });
});


module.exports = router;
