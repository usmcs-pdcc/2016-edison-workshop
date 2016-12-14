var five = require("johnny-five");
var Edison = require("edison-io");
var random = require("generate-random-data");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {

  // Plug the Servo module
  // into the Grove Shield's D5 jack
  var servo = new five.Servo(6);

  // Generate random rotary movement
  setInterval(function() {
      var rotary = random.int(0, 180);
      servo.to(rotary);
      console.log(rotary);
  }, 1000);
});
