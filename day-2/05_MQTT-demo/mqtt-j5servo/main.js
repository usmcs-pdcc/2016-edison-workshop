var mqtt = require('mqtt'); // include MQTT
var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

// Connect SN (sensor node) to MQTT-Server (broker)
var ipServer = "10.207.205.198";
var portServer = 3000;
var sn = mqtt.connect('ws://' + ipServer + ':' + portServer);

board.on("ready", function() {
  // Attach servo to D6 (PWM)
  var servo = new five.Servo(6);

  // 1. Establish websocket connection to MQTT-server (broker)
  // 2. Subscribe to topic 'servo'
  // 3. Set servo rotation according to mqtt-mobile-slider value
  sn.on('connect', function() {
    console.log("sn connected");

    sn.subscribe('servo');
  });

  // Upon receiving message from MQTT-server (broker), 
  // set servo rotation angle according to mqtt-mobile-slider value
  sn.on('message', function(topic, message) {
    servo.to(Number(message));
  });
});  // -- end --
