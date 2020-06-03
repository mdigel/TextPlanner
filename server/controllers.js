
// const db = require('./models.js');
const bcrypt = require('bcryptjs');
const models = require('./models.js');

const controllers = {};

controllers.createUser = (req, res, next) => {
  console.log('in create User middleware');

  if (!req.body.password) {
    res.locals.err = 'Please create a password';
    return next();
  }

  console.log('req.body', req.body);

  const newUser = {
    userName: req.body.username,
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

      if (errFromMongoose.code === 11000) {
        res.locals.err = 'This username is already taken';
      }

      next();
    });
};

controllers.verifyUser = (req, res, next) => {
  console.log('in Verify User middleware');
  console.log('req.body', req.body);

  // write code here
  const userName = req.body.username;
  const userPasswordAttempt = req.body.password;


  // confirm if user is in DB
  models.User.find({ userName })
    .then((foundUser) => {
      // 2. if it is -compare password
      // if (userPasswordAttempt === foundUser[0].password) {
      bcrypt.compare(userPasswordAttempt, foundUser[0].password)

        .then((isMatch) => {
          if (!isMatch) {
            console.log('incorrect password!!!');
            // res.redirect('/signup');
          } else {
            console.log('correct password!!!');
            res.redirect('/events');
          }
        })
        .catch((err) => next(err));
    })

    .catch((errFromMongoose) => {
      res.locals.err = 'This username doesn\'t exists';
      next();
    });
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
