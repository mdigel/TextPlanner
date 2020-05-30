const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const apiRouter = require('./routes.js');

const PORT = 3000;


/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// maybe need this for serving???
// app.use(express.static('../client/', { index: 'index.html' }));

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
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

