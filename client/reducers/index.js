/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import userReducer from './usersReducer';
import routeReducer from './routeReducers';
import createEventReducer from './createEventReducers';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  users: userReducer,
  routes: routeReducer,
  createEventReducer,
});

// make the combined reducers available for import
export default reducers;
