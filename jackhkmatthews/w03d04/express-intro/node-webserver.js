var http = require('http');

var app = http.createServer(function(request, response){

  console.log(request);

  response.writeHead(200, {
    'content-Type': 'text/plain'
  });
  response.end('Hello world!');
});

app.listen(3000, function(){
  console.log('server running on local host 3000');
});
