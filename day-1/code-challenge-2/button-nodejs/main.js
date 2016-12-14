// Include Libmraa library
var m = require('mraa');

// Attach Grove button to digital pin D2
var button = new m.Gpio(2);

setInterval(function() {
    console.log("button state: " + button.read());
}, 1000);