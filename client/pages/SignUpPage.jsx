/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleInputChange_Username: (e) => dispatch(actions.handleInputChange_Username(e.target.value)),
  handleInputChange_Password: (e) => dispatch(actions.handleInputChange_Password(e.target.value)),
  onSubmit: (userName, password) => {
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
          // this.props.history.push('/');
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
    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpComponent
          userName={this.props.setUserName}
          password={this.props.setPassword}
          onSubmit={this.props.onSubmit}
        />
        <Link to="/">Sign In</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
