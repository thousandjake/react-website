var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');

app.use(express.static('src/client/public'));

var INDEX_FILE = path.join(__dirname, '../client/index.html');

app.get('/*', function (req, res, next){
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

app.get('/', function (req, res){
  res.sendFile(INDEX_FILE);
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log(__dirname);
});
