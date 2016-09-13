var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('src/client/public'));
app.use(express.static('node_modules'));

var INDEX_FILE = path.join(__dirname, '../client/index.html');

app.get('/*', function (req, res, next){
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

app.get('/', function (req, res){
  res.sendFile(INDEX_FILE);
});

app.post('/contactMessage', function(req, res){
  var mailOpts, smtpTrans;

  smtpTrans = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'HomemadeChampagneJade@yahoo.com',
      pass: 'LaCroix4'
    }
  });

  mailOpts = {
    from: 'homemadeChampagneJade@yahoo.com',
    to: 'thousandjake@gmail.com',
    subject: 'New Contact Form Sent',
    text:
      'name : '+req.body.person+
      ' company: '+req.body.company+
      ' email: '+req.body.email+
      ' message: '+req.body.message
  };

  smtpTrans.sendMail(mailOpts, function(error, info) {
    if(error){
      console.log(error);
      res.send(error);
    } else {
      console.log('sucess');
    }
  })
})

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log(__dirname);
});
