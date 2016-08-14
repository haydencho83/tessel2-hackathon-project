var express = require('express');
var app = express();


//twilio module setup
var accountSid = 'ACc53d4b3274b300cfd7271583be4c75e0';
var authToken = '3282ecd2e11d9e36ec3938156306faa3';
var client = require('twilio')(accountSid, authToken);


//slack webhook api
var Slack = require('slack-node');
webhookUri = "https://hooks.slack.com/services/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";
slack = new Slack();
slack.setWebhook(webhookUri);


//random imgs, texts
var imgArr = [
	'https://media.giphy.com/media/xT0Gqz4x4eLd5gDtaU/giphy.gif',
	'https://media.giphy.com/media/l46CekClkSfNji5nq/giphy.gif',
	'https://media.giphy.com/media/xT0wlLqfUQfrm8v4Zy/giphy.gif',
	'https://media.giphy.com/media/2KxPrBH1F9wBy/giphy.gif'
]
var textArr = ['Turn up the AC!', 'It is hot!', 'Humidity Emergency', 'Dyiiiiing!!!']



//post router
app.post('/', function(req, res, next){

	var randomImg = imgArr[Math.floor(Math.random()*(imgArr.length))];
	var randomTxt = textArr[Math.floor(Math.random()*(textArr.length))];

	//send a message through slack
	slack.webhook({
	  channel: "#sweatyfullstackers",
	  username: "Tessel Hackathon Group 11_sweatyfullstackers",
	  text: randomTxt + randomImg + "\nVote 11 for team 11!"
	}, function(err, response) {
	  console.log(response);
	});	


	//send a message through twilio
	client.messages.create({
	   to: "+19148438841",
	   from: "+19143713081", 
	   body: "It's getting hot in here.",
	   mediaUrl: "https://media.giphy.com/media/26BREnyYXsPOxlUKk/giphy.gif",
	}, function(err, message) {
	   console.log(message.sid);
	});

	res.send('got it');
});


app.listen(7777, function(){
	console.log('server running on 7777');
});