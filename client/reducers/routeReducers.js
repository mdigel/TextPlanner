/**
 * ************************************
 *
 * @module  routeReducers for redirects
 * @author
 * @date
 * @description reducer for redirect state properties
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  signUpRedirect: false,
  signInRedirect: false,
};

const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    // user typing in userName
    case types.SIGNUP_REDIRECT: {
      const signUpRedirect = action.payload;

      return {
        ...state,
        signUpRedirect,
      };
    }


    // User typing in password
    case types.SIGNIN_REDIRECT: {
      const signInRedirect = action.payload;

      return {
        ...state,
        signInRedirect,
      };
    }

    default:
      return state;
  }
};


export default routeReducer;
