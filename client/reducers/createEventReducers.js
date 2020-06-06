/**
 * ************************************
 *
 * @module  createEventReducer
 * @author
 * @date
 * @description reducer for user data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  eventName: '',
  message: '',
  phoneNumbers1: '',
  phoneNumbers2: '',
};

const createEventReducer = (state = initialState, action) => {
  switch (action.type) {
    // user typing in event name
    case types.SET_EVENTNAME: {
      const eventName = action.payload;

      return {
        ...state,
        eventName,
      };
    }


    // User typing in phone number 1
    case types.SET_PHONENUMBER1: {
      const phoneNumber1 = action.payload;

      return {
        ...state,
        phoneNumber1,
      };
    }

    // User typing in phone number 2
    case types.SET_PHONENUMBER2: {
      const phoneNumber2 = action.payload;

      return {
        ...state,
        phoneNumber2,
      };
    }

    // User typing in message
    case types.SET_MESSAGE: {
      const message = action.payload;

      return {
        ...state,
        message,
      };
    }

    default:
      return state;
  }
};


export default createEventReducer;
