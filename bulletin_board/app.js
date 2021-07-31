var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
const { brotliDecompress } = require('zlib');

// EJSの設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
