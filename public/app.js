var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
});
server.listen(8080);