  // Attach moisture sensor to analog pin A0
int uvPin = A1;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(uvPin, INPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println(analogRead(uvPin));
}
