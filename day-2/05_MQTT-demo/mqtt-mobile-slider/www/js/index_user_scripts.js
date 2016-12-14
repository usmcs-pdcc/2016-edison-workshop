/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
    var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);
    
    // initiate mqtt connection
    var client;
    
 /*
   hook up event handlers 
 */

 function register_event_handlers()
 {  
     /* button  #connectBtn */
    $(document).on("click", "#connectBtn", function(evt)
    {
        var ipaddr = $("#ipaddr").val();
        var port = $("#port").val();
        client = mqtt.connect({host: ipaddr, port: port});    
        
        // upon successful connection
        client.on('connect', function() {
            console.log(clientId + ": connected");
            alert("connected to server!");
            
            // activate page: uib_page_1
            activate_page("#uib_page_1");
        
            //subscribe to topic
            client.subscribe('servo');
            
            $("#my-input").bind("slider:changed", function(event, data) {
                console.log(data.value);
                client.publish('servo', data.value);
                document.getElementById("myspan").textContent = data.value;
            });
        });
        
        client.on('error', function(err) {
            console.log(err);
            alert(err);
        });        
    });
    
        /* button  #disconnectBtn */
    $(document).on("click", "#disconnectBtn", function(evt)
    {
        client.end();
        
        // close connection
        client.on('close', function() {
            console.log(clientId + ': disconnected');
        });
        
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
    
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
