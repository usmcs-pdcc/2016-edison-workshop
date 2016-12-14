/* 
 * Grove Indoor Environment Kit: Light sensor
 *
 * Author: hadrihl // hadrihilmi@gmail.com
 */
var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

// Button at Analog pin A2
var light = new m.Aio(2);

// Put light sensor away from source of light
// and see the changes. (in my experiment, when 
// the value recorded in dark is: 100~)
setInterval(function() {
	console.log("light: " + light.read());
}, 1000);