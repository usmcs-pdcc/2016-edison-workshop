// Attach PIR sensor to digital pin 7
int pirPin = 7;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(pirPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(digitalRead(pirPin));
}
