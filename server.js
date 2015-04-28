var express = require('express');
var app = express();
// middleware morgan
var morgan = require('morgan');
// body parser middleware that parses json req
var bodyParser = require('body-parser');

var api = require('./api.js')

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/post', function(req,res){
  console.log('this is req.body: ', req.body)
  api.search(req, res);
});


var server = app.listen(1337, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('App is listening at http://:', host, port);
})

