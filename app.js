var express = require('express');
var app = express();

var api = require('./api.js')
// middleware morgan
var morgan = require('morgan');

app.set('view engine', 'ejs');

app.get('/', function(req,res){
  console.log('this is req',req.query.term)
  api.search();
  res.send('This is rocky\'s end point');
  // res.render('index')
});

app.use(morgan('dev'));

var server = app.listen(1337, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('App is listening at http://:', host, port);
})

