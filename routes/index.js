var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('index', { title: "Fatima Kaleem's Portfolio" });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FATIMA KALEEM' });
});

/* GET About Me page. */
router.get('/AboutMe', function(req, res, next) {
  res.render('index', { title: 'AboutMe' });
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/ContactMe', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});


module.exports = router;
