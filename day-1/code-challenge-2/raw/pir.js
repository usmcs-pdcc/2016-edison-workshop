/* 
 * Grove Indoor Environment Kit: PIR
 *
 * Author: hadrihl // hadrihilmi@gmail.com
 */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

// PIR at Digital pin D2
var pir = new m.Gpio(2);

// Default Buzzer state
var state = 0;

// Observe motion detection
setInterval(function() {
	if(pir.read() == true) console.log("motion detected!")
}, 1000);