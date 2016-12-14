var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http); // Bind to websocket

var random = require('generate-random-data'); // generate random data

app.use(express.static(__dirname));

// Bind port number for listening
http.listen(11111, function() {
	console.log("listening on *:11111");
});

io.on('connection', function(socket) {
	console.log("a user connected.");

	var intervalID = setInterval(function() {
		var value = random.int(0, 100);
		socket.emit('msg', value);
	}, 1000);

	socket.on('disconnect', function() {
		console.log("user disconnected");
	});
});