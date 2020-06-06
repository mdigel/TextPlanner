/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styles from '../stylesheets/application.scss';

const EventCreator = (props) => (
  // <div>

  <form onSubmit={(e) => {
    const userName = e.target[0].value;
    const password = e.target[1].value;
    props.onSubmit(e, userName, password);
  }}
  >

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
      <input
        id="PhoneNumberField"
        type="text"
        name="phoneNumnbers"
        placeholder="440-708-3756, 549-696-5840,..."
          // value={props.password}
          // onChange={(e) => props.handleInputChange_Password(e)}
        required
      />


    </div>
    <div id="SaveEvent-btn-Container">
      <input className="button" type="submit" value="Save Event" />
    </div>
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
    </div>

    {/* Buttons */}
    <div id="SaveMessage-btn-Container">
      <input className="button" type="submit" value="Save Message" />
    </div>
    <div id="SendMessage-btn-Container">
      <input className="button" type="submit" value="Send Text Messages" />
    </div>

  </form>
  // </div>
);
export default EventCreator;
