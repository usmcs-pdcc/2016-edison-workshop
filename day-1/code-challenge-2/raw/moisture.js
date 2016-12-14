/* 
 * Grove Indoor Environment Kit: Moisture sensor
 * 
 * Author: hadrihl // hadrihilmi@gmail.com
 */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

// moisture sensor at Analog pin A0	
var moisture = new m.Aio(0);

setInterval(function() {
	console.log("moisture: " + moisture.read());
}, 1000);