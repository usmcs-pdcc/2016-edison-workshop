// Include Libmraa library
var m = require('mraa');

// Attach UV sensor to analog pin A2
var uv = new m.Aio(A2);

setInterval(function() {
    console.log("uv: " + uv.read());
}, 1000);