var alexa = require("alexa-app");

var app = new alexa.app();
app.launch(function(request, response) {
console.log('launch');
  
  response.say("OK");//.send();
  // because this is an async handler
});

app.intent('GetHoroscope', {
	'slots': { 'Sign': 'LIST_OF_SIGNS', 'Date': 'AMAZON.DATE' },
	'utterances': [
		'what is the horoscope for {Sign}',
		'what will the horoscope for {Sign} be on {Date}',
		'get me my horoscope',
		'{Sign}'
	]
}, function(request, response) {
	response.say('Hi~~').send();
	return true;
});

// connect to lambda
exports.handler = app.lambda();
