#include <ESP8266WiFi.h>                                                    
#include <FirebaseArduino.h>
#include <DHT.h>                                                
#define FIREBASE_HOST "iot-home-202.firebaseio.com"                        
#define FIREBASE_AUTH "gIXgrkUYrDKisKc7nYVHMvpx9osN3FM5VsKH71mW"            
#define WIFI_SSID "FEB F33"                                              
#define WIFI_PASSWORD "1919hfhf"
#define DHTPIN 5
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
#define ldrPin A0
#define ledPin 16
#define pirpin 4

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  pinMode(ldrPin, INPUT); 
  pinMode(pirpin, INPUT);      
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                     
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());                                            
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  dht.begin();             
}

void sensorDHT11(){
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  if (isnan(h) || isnan(t)) {                                                
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }  
  Serial.print("Humidity: ");  Serial.print(h);
  String fireHumid = String(h) + String("%");                                         
  Serial.print("%  Temperature: ");  Serial.print(t);  Serial.println("°C");
  String fireTemp = String(t) + String("°C"); 
  Firebase.setString("smarthome/dht/humidity", fireHumid);                                  
  Firebase.setString("smarthome/dht/temperature", fireTemp);
  delay(2000);  
}

void LDR(){
  int sensorValue = analogRead(ldrPin);
  if(sensorValue > 1000){
    digitalWrite(ledPin, HIGH);
    String ledOn="On";
    Firebase.setString("smarthome/light/light", ledOn);
    Serial.println(sensorValue);
  }else if (sensorValue < 999){
    delay(2000);
    digitalWrite(ledPin, LOW);
    String ledOff="Off";
    Firebase.setString("smarthome/light/light", ledOff);
    Serial.println(sensorValue);
  }
  delay(2000);
}

void PIR(){
  int val = digitalRead(pirpin);  // read input value
  if (val == HIGH){
    String movementYes="There is someone";
    Firebase.setString("smarthome/pir/human", movementYes);
    Serial.println(movementYes); 
  }
  else{
    String movementNo="There is no one";
    Firebase.setString("smarthome/pir/human", movementNo);
    Serial.println(movementNo); 
  }
    
  delay(2000); 
}


void loop(){
  sensorDHT11();
  LDR();
  PIR();
}
