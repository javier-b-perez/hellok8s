/**
 * @fileoverview Description of this file.
 */
var http = require('http');

var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end('Hello World! - Javier branch');
};
var www = http.createServer(handleRequest);
www.listen(8080);
