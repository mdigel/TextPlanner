/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import EventCreator from '../components/eventCreator';
import EventResponses from '../components/eventResponses';

class EventCreatorPage extends Component {
  // logic

  render() {
    return (
      <div id="EventCreatorPage">
        <div id="EventCreatorPage_Container">
          <h1>Create an Event</h1>
          <EventCreator />
          <hr />
          <EventResponses />
        </div>
      </div>
    );
  }
}

export default EventCreatorPage;
