const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requiresAuth = require('../middleware/requiresAuth.js')

router.post('/', requiresAuth, (req, res, next) => {
  const preferences = req.body
  
  User.findById(req.user._id, (err, user) => {
      if (err) return next(err);
      user.preferences = preferences
      console.log(preferences)
      user.save((err, preferences) => {
        if (err) return next(err)
        res.json(preferences)
      })
  })
  
});

router.get('/', requiresAuth, (req, res, next) => {
  console.log(req.user)
  User.findById(req.user, (err, user) => {
      res.json(user.preferences)
  })
})

module.exports = router;
