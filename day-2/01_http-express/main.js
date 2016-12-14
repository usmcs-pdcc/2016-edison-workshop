var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname));

// Bind port number for listening
http.listen(11111, function() {
	console.log("listening on *:11111");
});
