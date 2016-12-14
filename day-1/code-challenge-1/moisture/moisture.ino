  // Attach moisture sensor to analog pin A0
int moisturePin = A0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(moisturePin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(analogRead(moisturePin));
}
