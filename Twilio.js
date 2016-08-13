// Twilio.js
var accountSid = 'ACc53d4b3274b300cfd7271583be4c75e0';
var authToken = '3282ecd2e11d9e36ec3938156306faa3';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
   to: "+19148438841",
   from: "+19143713081", 
   body: "It's getting hot in here.",
   mediaUrl: "https://media.giphy.com/media/26BREnyYXsPOxlUKk/giphy.gif (195KB)

",
}, function(err, message) {
   console.log(message.sid);
});