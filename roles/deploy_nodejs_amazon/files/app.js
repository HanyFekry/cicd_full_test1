var http = require("http");
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hello world from Hany node app!");
});
server.listen(3000);