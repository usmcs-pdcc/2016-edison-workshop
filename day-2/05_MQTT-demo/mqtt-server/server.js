// MQTT-Server: MQTT over websocket
// ref: https://github.com/mcollina/mosca/wiki/MQTT-over-Websockets
var mosca = require('mosca');

// Set your MQTT Server IP address
var settings = {
    host: '10.207.205.198',
    port: 1884,
    http: {
        port: 3000, // MQTT server will hookup at port 3000
        bundle: true,
        static: './'
    }
};

// server init
var server = new mosca.Server(settings);

// connected
server.on('clientConnected', function(client) {
    console.log("connected:", client.id);
});

// disconnected
server.on('clientDisconnected', function(client) {
    console.log("disconnected:", client.id);
});

server.on('ready', function() {
    console.log("MQTT-Server is running at " + settings.host + ":" + settings.http.port);
});

