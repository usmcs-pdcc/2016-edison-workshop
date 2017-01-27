var app = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http); // Bind to websocket

var value = 0; // reserve for data

var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

// Bind port number for listening
http.listen(11111, function() {
	console.log("listening on *:11111");
});

board.on("ready", function() {
  // Attach servo to D5 (PWM)
  var servo = new five.Servo(5);

  // 1. Establish websocket connection to mobile-slider
  // 2. Receive slider value from mobile-slider
  // 3. Set servo rotation according to mobile-slider value
  io.on('connect', function(socket) {
  	socket.on('msg', function(data) {
		value = data;

    setInterval(function() {
      // open lid: definition
      servo.to(80);
      delay(1000);
      servo.to(0);

    }, 1000);
		
    servo.to(value);
		console.log("value: " + value);
	});
  });

  // -- end --
});
