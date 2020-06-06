/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  console.log('state in SignUp Page', state);
  return {
  // add pertinent state here
    userName: state.users.userName,
  };
};

const mapDispatchToProps = (dispatch) => ({

});


class EventsPage extends Component {
  // logic

  render() {
    return (
      <div id="EventsPage">

        <div id="EventsPage_Container">
          <h1>Welcome, <span>{this.props.userName} </span></h1>

          <Link to="/eventcreator">
            <button id="createEvent" className="button">
              Create An Event
            </button>
          </Link>

          <div id="currentEvents">
            <h1>Current Events</h1>
            <hr />
          </div>
          {/* <div id="pastEvents">
            <h1>Past Events</h1>
          </div> */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
