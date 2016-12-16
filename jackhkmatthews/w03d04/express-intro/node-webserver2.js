var http = require('http');

var app = http.createServer(function(req, res){

  if (req.url === '/'){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Welcome to the homepage');
  } else if (req.url === '/about') {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Welcome to the about page');
  } else {
    res.writeHead(404, {'content-Type': 'text/plain'});
    res.end('404 error.  File not found');
  }

});

app.listen(3000, function(){
  console.log('server running on local host 3000');
});
