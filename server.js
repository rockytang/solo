var express = require('express');
var app = express();
// middleware morgan
var morgan = require('morgan');

var api = require('./api.js')

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.get('/get', function(req,res){
  console.log('this is req',req.query.term)
  api.search();
  // res.sendfile('./public/index.html');
  // res.render('index')
  res.send("hello world")
});


var server = app.listen(1337, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('App is listening at http://:', host, port);
})

