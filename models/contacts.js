const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Model
const ContactSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	number: {
		type: String
	},
	email: {
		type: String
	},
	address: {
		type: String
	}
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;