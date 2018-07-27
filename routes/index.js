var express = require('express');
// var http = require('http');
var router = express.Router();
var request = require('request');


//can import code directly from finalmaybecompressed
var Posts =require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',posts:Posts.posts });
});

/* get new page. */
router.get('/new', function(req, res, next) {
  res.render('new');
});

/* get archive page. */
router.get('/archive', function(req, res, next) {
  res.render('archive', { title: 'archive',posts:Posts.posts });
});

//post new Page
router.post('/new', function(req, res, next) {
//res.send(req.body)
//create variable to posts

let obj ={
"title":req.body.title,
"Author":req.body.Author,
"image":req.body.image,
"date":req.body.date,
"time":req.body.time,
"content":req.body.content,
}
//write logic that saves this data
request.post({
  url:"http://localhost:8000/posts",
  body:obj,
  json:true
},function (error,responsive,body) {
  //what to send when function has finished
  res.redirect('/new');
});
});
/* GET article pages. */
router.get('/article1', function(req, res, next) {
  res.render('article1');
});

router.get('/article2', function(req, res, next) {
  res.render('article2');
});

router.get('/article3', function(req, res, next) {
  res.render('article3');
});

router.get('/article4', function(req, res, next) {
  res.render('article4');
});

router.get('/article5', function(req, res, next) {
  res.render('article5');
});

router.get('/article6', function(req, res, next) {
  res.render('article6');
});





module.exports = router;
