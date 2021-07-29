var express = require('express');
var app = express();

// EJSの設定
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('test', {message: '<strong>強調表示</strong>'});
});

app.listen(3000, function () {
})