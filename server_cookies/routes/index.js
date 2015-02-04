var express = require('express');
var router = express.Router();
// var cookieParser = require('cookier-parser');

/* GET home page. *///FORM******************
router.get('/', function(req, res, next) {
	//check if user has cookie
	//if no render home page with form
	console.log("Cookies: ", req.cookies)
	if (req.cookies.favoritecolor){
  res.render('index', { title: 'Express', color: req.cookies.favoritecolor});
	}
  	else { 
  		res.render('index', { title: 'Express'});
  	}
});

module.exports = router;

// var app = express();
router.post('/', function(req, res, next) { 
//set the cookie
//if has cookie go to spceific jade file, else other jade file
res.cookie("favoritecolor", req.body.colors);
res.redirect('/');
});