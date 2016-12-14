var m = require('mraa');
console.log("Libmraa version: " + m.getVersion());

var generate = new m.Pwm(6); // hook up at PWM pin 6 at Edison
var dc = 0.5; // set duty cycle: 50%

generate.period_us(200); // set period as 200 ms
generate.enable(true);

setInterval(function() {
	generate.write(dc);
	console.log("duty cycle (%): " + dc * 100);
}, 1000);