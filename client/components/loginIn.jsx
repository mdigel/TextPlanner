/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
  // logic

  render() {
    return (
      <div>
        {/* <form method="POST" action="/api/login">
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <input type="submit" value="login" />
        </form> */}

        <form onSubmit={this.onSubmit}>
          <h2>Login Below!</h2>
          <input
            type="userName"
            name="userName"
            placeholder="Enter Username"
            // value={this.state.userName}
            // onChange={this.handleInputChange_Username}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            // value={this.state.password}
            // onChange={this.handleInputChange_Password}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
