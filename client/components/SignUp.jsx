/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  // logic

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form method="POST" action="/api/signup">
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <button type="submit" value="Create User"> Submit </button>
        </form>
        <Link to="/">Sign In</Link>
      </div>
    );
  }
}

export default SignUp;
