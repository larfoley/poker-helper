var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/', passport.authenticate('local'), (req, res, next) => {
  res.json(req.user)
});


module.exports = router;
