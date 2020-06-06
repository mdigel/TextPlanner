/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styles from '../stylesheets/application.scss';

const EventCreator = (props) => (

  <form onSubmit={(e) => {
    const userName = e.target[0].value;
    const password = e.target[1].value;
    props.onSubmit(e, userName, password);
  }}
  >


    {/* Event Name Field */}
    <div id="input_Container">
      <input
        id="eventNameField"
        type="text"
        name="eventName"
        placeholder="Event Name"
          // value={props.userName}
          // onChange={(e) => props.handleInputChange_Username(e)}
        required
      />
    </div>


    {/* Message and Phone Numbers */}
    <div id="MessageContainer">
      <textarea
        id="MessageField"
        type="text"
        name="message"
        placeholder="Your invite..."
            // value={props.password}
            // onChange={(e) => props.handleInputChange_Password(e)}
        required
      />
      <div id="phoneNumber_Container">

        {/* 1st phone number */}
        <input
          id="PhoneNumberField_1"
          type="text"
          name="phoneNumnbers"
          placeholder="+14407083756"
          // value={props.password}
          // onChange={(e) => props.handleInputChange_Password(e)}
          required
        />

        {/* 2nd phone number */}
        <input
          id="PhoneNumberField_2"
          type="text"
          name="phoneNumnbers"
          placeholder="+14407083756"
        // value={props.password}
        // onChange={(e) => props.handleInputChange_Password(e)}
          required
        />

        {/* Add More Phone Numbers */}
        <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/add-circle-green-512.png" />


      </div>
    </div>


    {/* Save Event */}
    <div id="SaveEvent-btn-Container">
      <input className="button" type="submit" value="Save Event" />
    </div>

    <div id="SendMessage-btn-Container">
      <input className="button" type="submit" value="Send Text Messages" />
    </div>

  </form>

  // <div id='Responses_Continer'>
  //   <h1>Responses</h1>

  // </div>

);
export default EventCreator;
