/* eslint-disable no-unused-expressions */
/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';

/**
 * User Actions
 *
 */
export const handleInputChange_Username = (newUserName) => {
  console.log('in userName action');
  return ({
    type: types.SET_USERNAME,
    payload: newUserName,
  });
};

export const handleInputChange_Password = (newPassword) => {
  console.log('in password action');
  return ({
    type: types.SET_PASSWORD,
    payload: newPassword,
  });
};

/**
 * Route Actions
 *
 */

export const redirectSignUp = (signInRedirect) => {
  console.log('in redirectSignUp');
  return ({
    type: types.SIGNUP_REDIRECT,
    payload: signInRedirect,
  });
};

export const redirectSignIn = (signUpRedirect) => {
  console.log('in redirectSignIn');
  return ({
    type: types.SIGNIN_REDIRECT,
    payload: signUpRedirect,
  });
};


/**
 * Event Actions
 *
 */
