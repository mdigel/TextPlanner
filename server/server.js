const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./routes.js');
const smsRouter = require('./routes_sms.js');

const PORT = 3000;

/**
 * handle parsing request body
 */
const mongoose = require('./models.js');

console.log(mongoose);


/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * define route handlers
 */
app.use('/api', apiRouter);
app.use('/sms', smsRouter);

app.get('/*', (req, res) => {
  console.log('get request...');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});


/**
 * serve up static files in production
 */
if (process.env.NODE_ENV === 'production') {
  // serve bundle.js
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));
}


/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    // message: { err: 'An error occurred' },
    message: err,
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});


/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
