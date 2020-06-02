// tried connecting with help of this: https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGO_URI = 'mongodb+srv://mdigel:codesmith@rsvpapp-jdep1.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'RsvpApp',
})
  .then(() => console.log('Connected to the Mongo DB.'))
  .catch((err) => console.log('MongoDB connect error', err));

const { Schema } = mongoose;

/**
 * User Schema
 */
const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },

});

const SALT_WORK_FACTOR = 10;

// encrypt the password
userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

/**
 * Session Schema
 * Notes: need to change expires in 30 seconds to something longer
 */
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 30, default: Date.now },
});


/**
 * creates a model for the collections that will be exported
 */
const User = mongoose.model('user', userSchema);
const Session = mongoose.model('session', sessionSchema);


// exports all the models in object to be used in the controller
module.exports = {
  User,
  Session,
};
