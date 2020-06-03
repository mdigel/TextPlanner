/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import SignUp from './pages/SignUpPage';
import SignIn from './pages/SignInPage';
import Events from './pages/EventsPage';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <Router>
      <div id="MainContainer">
        <nav>
          <ul>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>

        </div>
        </Router>
    );
  }
}


export default App;
