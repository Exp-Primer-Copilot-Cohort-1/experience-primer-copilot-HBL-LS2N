// Create web server
// 1. Create a new web server
// 2. Create a new route
// 3. Read the comments from the file
// 4. Send the comments back to the client

// Load the http module to create an http server.
const http = require('http');
const fs = require('fs');
const url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((request, response) => {
    const path = url.parse(request.url).pathname;
    if (path === '/comments') {
        fs.readFile('comments.json', 'utf8', (err, data) => {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('Not Found');
            } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.end(data);
            }
        });
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Not Found');
    }
});

// Listen on port 8000, IP defaults to