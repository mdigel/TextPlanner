const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

// might add controllers.setCookie, controllers.startSession later
router.post('/signup', controllers.createUser, (req, res) => {
  res.send('test');
});

// next route... login!
router.post('/login', controllers.verifyUser, (req, res) => {
  res.send('test');
});


module.exports = router;
