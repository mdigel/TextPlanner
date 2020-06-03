/**
 * ************************************
 *
 * @module  usersReducer
 * @author
 * @date
 * @description reducer for user data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  userName: '',
  password: '',
  events: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // user typing in userName
    case types.SET_USERNAME: {
      const userName = action.payload;

      return {
        ...state,
        userName,
      };
    }


    // User typing in password
    case types.SET_PASSWORD: {
      const password = action.payload;

      return {
        ...state,
        password,
      };
    }

    default:
      return state;
  }
};


export default usersReducer;
