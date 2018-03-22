#!/usr/bin/env nodejs

var http = require("http");
var url = require("url");


http.createServer(function(request, response) {
    /*
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
    */
    var parsedUrl = url.parse(request.url, true);
    var queryAsObject = parsedUrl.query;
    var username = queryAsObject.username;
    var password = queryAsObject.password;
    
    response.writeHead(200, {"content-Type": "text/plain"});
    response.end('Hello '+ username + ', your password is: ' + password);
    
}).listen(8010);



console.log('Server running at port 8010');