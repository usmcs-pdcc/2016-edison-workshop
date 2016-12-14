/* 
 * Grove Indoor Environment Kit: UV sensor
 *
 * Author: hadrihl // hadrihilmi@gmail.com
 */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

// Button at Analog pin A3
var uv = new m.Aio(3);

// Point UV sensor to direct sunlight and partially direct
// in order to see the changes 
setInterval(function() {
	console.log("uv: " + uv.read());
}, 1000);