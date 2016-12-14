// Include Libmraa library
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

// Attach PIR to D7
var pir = new m.Gpio(7);

setInterval(function() {
    console.log(pir.read());
}, 10);