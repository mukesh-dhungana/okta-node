const http = require("http");

var server=http.createServer(function(req,res){
    res.writeHead(200);
    res.end("Hello world");
});
server.listen(process.env.PORT || 5000, function () {
  console.log("listening on *:5000");
});
