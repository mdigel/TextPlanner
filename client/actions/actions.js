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
  ({
    type: types.SET_USERNAME,
    payload: newUserName,
  });
};

export const handleInputChange_Password = (newPassword) => {
  console.log('in password action');
  ({
    type: types.SET_PASSWORD,
    payload: newPassword,
  });
};

/**
 * Fetch Actions
 *
 */


/**
 * Event Actions
 *
 */
