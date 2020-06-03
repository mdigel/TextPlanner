/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';

// Components
import Login from '../components/loginIn';

class SignIn extends Component {
  // logic

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <Login />
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default SignIn;
