/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Link,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';


// Componets & Files
import * as actions from '../actions/actions';
import SignUpComponent from '../components/signUp';

const mapStateToProps = (state) => {
  console.log('state in SignUp Page', state);
  return {
  // add pertinent state here
    userName: state.users.userName,
    password: state.users.password,
    signUpRedirect: state.routes.signUpRedirect,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleInputChange_Username: (e) => dispatch(actions.handleInputChange_Username(e.target.value)),
  handleInputChange_Password: (e) => dispatch(actions.handleInputChange_Password(e.target.value)),
  onSubmit: (e, userName, password) => {
    // prevent get request from Submit button
    e.preventDefault();

    // create an account for a user
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('successful fetch');
          dispatch(actions.redirectSignUp(true));
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


class SignUp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.signUpRedirect) {
      return <Redirect to="/events" />;
    }
    return (
      <div id="SignUpPage">
        <div id="SignUpPage_Container">
          <h1>Events with friends made simple.</h1>
          <h2>Organize events via text message.</h2>
          <SignUpComponent
          userName={this.props.userName}
          password={this.props.password}
          onSubmit={this.props.onSubmit}
          handleInputChange_Username={this.props.handleInputChange_Username}
          handleInputChange_Password={this.props.handleInputChange_Password}
        />
          <div id="link"><Link to="/">Sign In</Link></div>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
