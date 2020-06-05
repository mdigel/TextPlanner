/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Componets & Files
import * as actions from '../actions/actions';
import Login from '../components/loginIn';

const mapStateToProps = (state) => {
  console.log('state in SignUp Page', state);
  return {
  // add pertinent state here
    userName: state.users.userName,
    password: state.users.password,
    signInRedirect: state.routes.signInRedirect,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleInputChange_Username: (e) => dispatch(actions.handleInputChange_Username(e.target.value)),
  handleInputChange_Password: (e) => dispatch(actions.handleInputChange_Password(e.target.value)),
  onSubmit: (e, userName, password) => {
    // prevent get request from Submit button
    e.preventDefault();

    console.log('userName', userName);
    console.log('password', password);

    // Validate whether user has an account
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('fetch request status: 200');
          dispatch(actions.redirectSignIn(true));
        } else if (res.status === 403) {
          // need action for "incorrect password"
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error logging in please try again');
      });
  },

});


class SignIn extends Component {
  // logic

  render() {
    if (this.props.signInRedirect) {
      return <Redirect to="/events" />;
    }

    return (
      <div id="SignInPage">
        <div id="SignUpPage_Container">
          <h1>Events with friends made simple.</h1>
          <h2>Organize events via text message.</h2>
          <Login
            userName={this.props.userName}
            password={this.props.password}
            onSubmit={this.props.onSubmit}
            handleInputChange_Username={this.props.handleInputChange_Username}
            handleInputChange_Password={this.props.handleInputChange_Password}
          />
          <div id="link"><Link to="/signup">Sign Up</Link></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
