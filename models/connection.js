const mongoose = require('mongoose');

//Connect to mongodb
mongoose.connect('mongodb://localhost/contacts');

mongoose.connection.once('open', function() {
	console.log("Connection has been made with the database");
}).on('error', function(error) {
	console.log('connection error:', error);
});