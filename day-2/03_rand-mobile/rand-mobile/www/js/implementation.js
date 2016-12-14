var socket; // default init
            
            function connect() {
                                    
                    // generate c3 gauge chart
                    var gaugechart = eon.chart({
                        channel: "c3-gauge",
                        generate: {
                            bindto: '#div1',
                            data: {
                                type: 'gauge',
                            },
                            gauge: {
                                min: 0,
                                max: 100,
                                units: 'Celcius'
                            },
                            color: {
                                pattern: ['#FF0000', '#F6C600', '#60B044'],
                                threshold: {
                                    values: [30, 60, 90]
                                }
                            }
                        }
                    });
                
                var bar = eon.chart({
                    channel: "c3-bar",
                    generate: {
                            bindto: '#div2',
                            data: {
                                labels: true,
                                type: 'bar'
                            },
                            bar: {
                                width: 100
                            },
                            tooltip: {
                                show: true
                            }
                        }
                });
                
                // get values from text fields
                var ip_addr = $("#ipaddr").val();
                var port = $("#port").val();
                
                // establish socket.io connection
                console.log("ip: " + ip_addr + ":" + port);
                socket = io.connect("http://" + ip_addr + ":" + port, { 'forceNew': true });
                
                // upon succesful connection,
                socket.on('connect', function() {
                    console.log("connection successful!");
                    
                    // load next page
                    $.ui.loadContent("#uib_page_1", false, false, "fade");
                });
                
                // var init
                var N = 0,
                    temp = 0,
                    mean = 0;
                    max = 0,
                    min = 0;
                
                socket.on('msg', function(data) {
                    //console.log("streaming now...");
                    
                    // load gauge chart
                    PUBNUB.init({
                        publish_key: 'demo',
                        subscribe_key: 'demo'
                    });
                    
                    console.log("data: " + data);

                    gaugechart.load({
                        columns: [['data', data]]
                    });
                    
                    // find average, max, min
                    ++N;
                    temp = temp + data;
                    
                    if(N == 1) { min = data; }
                    if(max <= data) { max = data; }
                    if(min >= data) { min = data; }
                    
                    mean = temp / N;
                    // load bar chart
                    bar.load({
                        columns: [
                            ['Average', mean.toFixed(2)],
                            ['Max', max.toFixed(2)],
                            ['Min', min.toFixed(2)]
                        ]
                    });
                    
                    
//                    if(N == 59) {    
//                        var mean = temp / N;
//                        console.log("mean: " + mean);
//                        
//                        // load bar
//                        bar.load({
//                            columns: [
//                                ['Average', 51],
//                                ['Max', 78],
//                                ['Min', 12]
//                            ]
//                        });
//                        
//                        // reset
//                        N = 0;
//                        max = 0; 
//                        min = 0;
//                        temp = 0;
//                        
//                    } else {
//                        ++N;
//                        temp = temp + data;
//                        console.log("N: " + N);
//                        
//                        if(N == 1) { min = data; }
//                        
//                        if(max <= data) {
//                            max = data;
//                            console.log("max: " + max);
//                        } 
//                        
//                        if(min >= data) {
//                            min = data;
//                            console.log("min: " + min);
//                        }    
//                    }
                });
            }

function disconnect() {
    socket.disconnect();
    $.ui.loadContent("#mainpage", false, false, "fade");
}