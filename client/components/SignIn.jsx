/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';


class SignIn extends Component {
  // logic

  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <form method="POST" action="/api/login">
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <input type="submit" value="login" />
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

export default SignIn;
