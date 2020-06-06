const express = require('express');

const controllers = require('./controllers');

const router = express.Router();


// recieve text
router.post('/', controllers.recieveText, (req, res) => {
  console.log('res.locals', res.locals);

  res.status(200).send(JSON.stringify(res.locals));
});


module.exports = router;
