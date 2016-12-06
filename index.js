var express = require('express');
var express_config =require('./config/express.json').test;

global.app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
