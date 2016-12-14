var m = require('mraa'); // Include Libmraa
console.log("Libmraa version: " + m.getVersion());

// Attach moisture sensor to analog pin A0
var moisture = new m.Aio(0); 

setInterval(function() {
    console.log("moisture level: " + moisture.read());
}, 1000);