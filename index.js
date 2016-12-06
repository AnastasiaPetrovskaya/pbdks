var express = require('express')
    path = require('path');
var express_config =require('./config/express.json').test;

global.app = {root_dir: __dirname};
require('./lib/boot.js')(app, express_config);

app.http.require_controller('banks');

console.log('app.http', app.http);


