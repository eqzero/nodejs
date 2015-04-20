console.log("Node.js is running...!!");

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type" : "text/html"});
  res.write('<span style="color:red;">APICHART</span>');
  res.end('Hello \n World\n');
}).listen(9999);
