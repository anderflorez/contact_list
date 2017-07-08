const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts.js');

//Get a list of contacts
router.get('/contacts', function(req, res, next) {
	Contact.find({}).then(function(contacts) {
		res.send(contacts);
	});
});

//Add a new contact to the db
router.post('/contacts', function(req, res, next) {
	Contact.create(req.body).then(function(contact) {
		res.send(contact);
	}).catch(next);
});

//Update a contact in the db
router.put('/contacts/:id', function(req, res, next) {
	Contact.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
		Contact.findOne({_id: req.params.id}).then(function(contact){
			res.send(contact);
		});
	});
});

router.delete('/contacts/:id', function(req, res, next) {
	Contact.findByIdAndRemove({_id: req.params.id}).then(function(contact) {
		res.send(contact);
	});
});

module.exports = router;