var express = require('express');
const app = require('../app');
var router = express.Router();
const path = require('path');
const images = path.join(__dirname, 'images');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, resp) {
  resp.render('hello', { title: 'hi there', subtitle: 'welcome to routing', img_title: 'take this image of cat server by static file:'} );
})

module.exports = router;
