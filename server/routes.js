const express = require('express');

const controllers = require('./controllers');

const router = express.Router();

// might add controllers.setCookie, controllers.startSession later
router.post('/signup', controllers.createUser, (req, res) => {
  if (res.locals.err) res.status(403).send('userName Already exits');
  else if (res.locals.id) res.status(200).send('User Created');
});

// next route... login!
router.post('/login', controllers.verifyUser, (req, res) => {
  if (!res.locals.auth) res.status(401).send('Incorrect Password');
  else if (res.locals.auth) res.status(200).send('Welcome');
});

// send text messages
router.post('/sendtexts', controllers.sendText, (req, res) => {
  res.send('send text!');
});


module.exports = router;
