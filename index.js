const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set up express app
const app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/contact');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//Initialize routes
app.use('/api', require('./routes/api.js'));

//Error handling middleware
app.use(function(err, req, res, next) {
	//console.log(err);
	res.status(422).send({error: err.message});
});


// app.use('/controllers', express.static('controllers'));

// app.get('/', function(req, res) {
// 	res.sendFile(__dirname + '/views/index.html');
// });

// app.get('/contactlist', function(req, res){
// 	console.log('Get request received at the server');

// 	var person1 = {
// 		name: 'Tim',
// 		email: 'ti@email.com',
// 		number: '(111)111 1111'
// 	};

// 	var person2 = {
// 		name: 'Emily',
// 		email: 'emily@email.com',
// 		number: '(222)222 2222'
// 	};

// 	var person3 = {
// 		name: 'John',
// 		email: 'john@email.com',
// 		number: '(333)333 3333'
// 	};

// 	var contactlist = [person1, person2, person3];

// 	res.json(contactlist);
// });


//Listen for requests
app.listen(process.env.port || 3000, function(){
	console.log("Listening for requests");
});
