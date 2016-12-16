var express = require('express');
var morgan  = require('morgan');
var app     = express();

// Logging
// app.use(function(req, res, next) {
//   console.log('In comes a ' + req.method + ' to ' + req.url);
//   next();
// });
app.use(morgan('dev'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'home' });
});

app.get('/about', function(req, res) {
  res.render('index', { title: 'about' });
});

app.get('*', function(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404!');
});

app.listen(3000, function(){
  console.log('Express is aaaalive');
});
