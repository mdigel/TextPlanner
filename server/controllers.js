
// const db = require('./models.js');
const bcrypt = require('bcryptjs');
const models = require('./models.js');

const accountSid = 'AC6c40de64d3fab9b66bd171475906d9e1';
const authToken = '3eb57596b1c11d44bbf1a572d4e95300';
const client = require('twilio')(accountSid, authToken);
const { MessagingResponse } = require('twilio').twiml;


const controllers = {};

controllers.createUser = (req, res, next) => {
  console.log('in create User middleware');

  if (!req.body.password) {
    res.locals.err = 'Please create a password';
    return next();
  }

  console.log('req.body', req.body);

  const newUser = {
    userName: req.body.userName,
    password: req.body.password,
  };

  console.log('newUser', newUser);

  models.User.create(newUser)
    .then((created) => {
      console.log('user created');

      // id to be used in cookie
      res.locals.id = created._id.toString();

      return next();
    })
    .catch((errFromMongoose) => {
      console.log('error when creating a user in mongo');

      // username already exits
      if (errFromMongoose.code === 11000) {
        res.locals.err = 'This username is already taken';
        next();
      } else {
        // other mongo error
        next(errFromMongoose);
      }
    });
};

controllers.verifyUser = (req, res, next) => {
  console.log('in Verify User middleware');
  console.log('req.body', req.body);

  // write code here
  const { userName } = req.body;
  const userPasswordAttempt = req.body.password;

  console.log('userName', userName);
  // confirm if user is in DB
  models.User.find({ userName })
    .then((foundUser) => {
      // 2. if it is -compare password
      // if (userPasswordAttempt === foundUser[0].password) {
      console.log('foundUser', foundUser);
      bcrypt.compare(userPasswordAttempt, foundUser[0].password)

        .then((isMatch) => {
          if (!isMatch) {
            console.log('incorrect password!!!');
            res.locals.auth = false;
            next();
          } else {
            console.log('correct password!!!');
            res.locals.auth = true;
            next();
          }
        })
        .catch((err) => next(err));
    })

    .catch((errFromMongoose) => {
      next(errFromMongoose);
    });
};

controllers.sendText = (req, res, next) => {
  console.log('req.body', req.body);

  const phoneNumbersArray = req.body.phoneNumbers;
  const { message } = req.body;

  phoneNumbersArray.forEach((el) => {
    // twilio
    client.messages
      .create({
        body: message,
        from: '+12057109318',
        to: el,
      })
      .then((message) => console.log(message.sid));
  });


  next();
};

// Run this command to set up Twilio webhook: twilio phone-numbers:update "+12057109318" --sms-url="http://localhost:3000/sms"

controllers.recieveText = (req, res, next) => {
  console.log('req.body', req.body);

  const messageInfo = {
    from: req.body.From,
    message: req.body.Body,
  };
  res.locals = messageInfo;
  // res.locals = req.body.From;

  // const twiml = new MessagingResponse();
  // twiml.message('The Robots are coming! Head for the hills!');
  // res.writeHead(200, { 'Content-Type': 'text/xml' });
  // res.end(twiml.toString());

  next();
};


// controllers.setCookie = (req, res, next) => {
//   console.log('in setCookie Middleware');
//   console.log('res.locals.id in setSSIDCookie', res.locals.id);

//   res.cookie('ssid', res.locals.id, { httpOnly: true });

//   next();
// };

// controllers.startSession = (req, res, next) => {
//   console.log('in startSession Middleware');

//   const newSession = {
//     cookieId: res.locals.id,
//   };

//   Session.create(newSession)
//     .then((createdSession) =>
//       // console.log('added a session!!!');
//       // console.log('newSession', createdSession);
//       next())
//     .catch(() => {
//       // console.log('catch error in creating session');
//       res.locals.err = 'error in creating a session';

//       next();
//     });
// };


module.exports = controllers;
