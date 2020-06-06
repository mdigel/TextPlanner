import React, { Component } from 'react';
import EventCreator from '../components/eventCreator';

class EventCreatorPage extends Component {
  // logic

  render() {
    return (
      <div id="EventCreatorPage">
        <div id="EventCreatorPage_Container">
          <h1>Create an Event</h1>
          <EventCreator />
        </div>
      </div>
    );
  }
}

export default EventCreatorPage;
