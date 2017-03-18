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
	]
}, function(request, response) {
	const sign = request.slot('Sign');
	const date = request.slot('Date');
	console.log(sign, date);
	response.say('Hi~~').send();
	return true;
});

// connect to lambda
exports.handler = app.lambda();
