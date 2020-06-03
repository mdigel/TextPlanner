/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// class SignUpComponent extends Component {
const SignUpComponent = (props) => (

  <div>
    {/* <form method="POST" action="/api/login">
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <input type="submit" value="login" />
        </form> */}

    <form onSubmit={() => props.onSubmit(props.userName, props.password)}>
      <h2>Sign Up Below!</h2>
      <input
        type="text"
        name="userName"
        placeholder="Enter Username"
        value={props.userName}
        onChange={props.handleInputChange_Username}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleInputChange_Password}
        required
      />
      <input type="submit" value="Submit" />
    </form>

  </div>);


export default SignUpComponent;
