const test = require('./index.js').handler;
const event = require('./event.json');

const context = {
	succeed: function(result) {
		console.log('succeed');
	},
	fail: function(e) {
		console.log(e);
		console.log(e.stack);
		console.log('failed');
	}
};
test(event, context);
