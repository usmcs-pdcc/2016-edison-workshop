MQTT-j5servo
============
A simple servo rotation with Johnny-Five and MQTT. 

Prepare Edison board
--------------------
1. Connect Base Shield to Edison. 

2. Set base sheild to 5V through toggle switch (near LED).

3. Connect servo to PWM pin (refer code). 

How-to-run
----------
1. Copy package to Edison board. 
```
$ scp mqtt-j5servo.tar.gz root@<edison-ip>:/home/root
```

2. Decompress package.
```
$ tar xzvf mqtt-j5servo.tar.gz
```

3. Enter your MQTT-server IP address in mqtt-j5servo/main.js.

4. Resolve dependencies.
```
$ npm install --save
```

5. run sensor-node.
```
$ node main.js
```

Author
------
* hadrihl (School of Computer Science USM) // hadrihilmi@gmail.com