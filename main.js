#!/usr/bin/env nodejs

var http = require("http");
var url = require("url");

/*
http.createServer(function (request, response) {
    
    var parsedUrl = url.parse(request.url, true); // true - query string as object
    var queryAsObject = parsedUrl.query; // to get the query string
    var name = queryAsObject.name; // to get the target value
    
    response.writeHead(200, {'Content-Type': "text/html"});
    
    response.write('<html><body>');
    response.write('<h1>Welcome!</h1>');
    response.write('<p>Welcome to our site that is utter crap at the moment.</p>');
    response.end('</html></body>');
    
    //response.end('Hello, ' + name + '\n'); // personalized hello
}).listen(8010);
*/

http.createServer(function(request, response) {
    request.on('error', function(err) {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', function(err) {
        console.error(err);
    });
    if (request.method === 'POST' && request.url === '/main') {
        request.pipe(response);
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8010);



console.log('Server running at port 8010');