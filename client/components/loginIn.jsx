/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styles from '../stylesheets/application.scss';

const Login = (props) => (
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
          placeholder="username"
          value={props.userName}
          onChange={(e) => props.handleInputChange_Username(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={props.password}
          onChange={(e) => props.handleInputChange_Password(e)}
          required
        />
      </div>
      <div id="submitContainer">
        <input className="submit" type="submit" value="Login" />
      </div>
    </form>
  </div>
);
export default Login;
