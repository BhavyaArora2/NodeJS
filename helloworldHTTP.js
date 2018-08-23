// Load HTTP module
var http=require("http");

// Create HTTP server and listen on port 3000 for requests
http.createServer((req,res)=>{

// Set the response HTTP header with HTTP status and Content type
res.writeHead(200,{'Context-Type':'text/html'});

 // Send the response body "Hello World"
 res.end('Hello World\n');

}).listen(3000);

//Print URL for accessing Server
console.log('Server running at http://127.0.0.1:3000/');

//To run this code write in cmd => node "helloworldHTTP.js"
