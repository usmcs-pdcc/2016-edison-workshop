/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #connectBtn */
    $(document).on("click", "#connectBtn", function(evt)
    {
         /*global activate_page */
         activate_page("#uib_page_1"); 
         return false;
    });
    
        /* button  #disconnectBtn */
    $(document).on("click", "#disconnectBtn", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
