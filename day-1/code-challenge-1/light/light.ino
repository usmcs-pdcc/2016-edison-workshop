// Attach light sensor to analog pin A2
int lightPin = A2;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(lightPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(analogRead(lightPin));
}
