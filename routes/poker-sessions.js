const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

// get all sessions
router.get('/', requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
	  if (err) return next(err);
	  res.json(user.pokerSessions);
	})
})

// get session by id
router.get('/:id', requiresAuth, (req, res, next) => {
	User.findById(req.user._id, (err, user) => {
	  if (err) return next(err);
		var pokerSession = user.pokerSessions.find(session => session.id === req.params.id)
		res.json(pokerSession)
	})
})

// Add a new poker session
router.post('/add', requiresAuth, (req, res, next) => {
	// TODO: Validate user Input
	User.findById(req.user._id, (err, user) => {
  	if (err) return next(err);
		// Check if session already exists
		if (user.pokerSessions.find(pokerSession => pokerSession._id === req.body.pokerSession)) {
			return res.status(400).json({message: "session already exists"})
		};
		user.pokerSessions.push(req.body.pokerSession)
		user.save((err, doc) => {
    if (err) return next(err);
    	res.json(doc.pokerSessions);
  	});
	})
});

// Edit poker pokerSession
router.post('/edit', requiresAuth, (req, res, next) => {
	let update = req.body.update
	let id = req.body.id

	console.log("Session Update From Client", update)

	User.findById(req.user._id, (err, user) => {
		if (err) return next(err)

		console.log("ID from client", id, typeof id);
		console.log("ID from database", user.pokerSessions[0]._id, typeof user.pokerSessions[0]._id);
		console.log("IDs match", user.pokerSessions[0]._id == id);
		// Update poker session
		user.pokerSessions = user.pokerSessions
			.map(session => session._id == id? update : session)

		console.log(user.pokerSessions
			.map(session => session._id == id? update : session))

		user.save((err, saved) => {
			if (err) return next(err)
			res.json(saved.pokerSessions)
		})


	})
})

// Delete Session
router.post('/delete', requiresAuth, (req, res, next) => {

	const id = req.body.id

	User.findById(req.user._id, (err, user) => {
		if (err) return next(err)

		// Delete poker session
		user.pokerSessions = user.pokerSessions
			.filter(session => session._id != id)

		user.save((err, saved) => {
			if (err) return next(err)
			res.json(saved.pokerSessions)
		})


	})
})

module.exports = router;
