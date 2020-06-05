/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// class SignUpComponent extends Component {
const SignUpComponent = (props) => (

  <div>

    <form onSubmit={(e) => {
      const userName = e.target[0].value;
      const password = e.target[1].value;
      props.onSubmit(e, userName, password);
    }}
    >
      <div id="input_Container">
        <input
          type="text"
          name="userName"
          placeholder="Create username"
          value={props.userName}
          onChange={(e) => props.handleInputChange_Username(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={props.password}
          onChange={(e) => props.handleInputChange_Password(e)}
          required
        />
      </div>

      <div id="submitContainer">
        <input className="submit" type="submit" value="Create Account" />
      </div>
    </form>

  </div>);


export default SignUpComponent;
