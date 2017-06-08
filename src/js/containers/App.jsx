import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';

import {observer, inject} from 'mobx-react';
import {number, string} from 'prop-types';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ListView from '../components/ListView';
import FacebookConnect from './FacebookConnect';
import Matches from '../components/Matches';
import Profile from '../components/Profile';

class App extends Component {
  constructor(props, context, userId, token) {
    super(props, context, userId, token);
    this.state = {
      userId, token
    };
  }

  requireAuth(token) {
    console.log(token);
  }

  render(token) {
    return (
      <section>

        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <Router>
          <Switch>
            <Route exact path='/' component={FacebookConnect} />
            <Route exact path='/ListView' component={ListView} onEnter={this.requireAuth(token)} />
            <Route exact path='/Matches' component={Matches} />
            <Route exact path='/Profile' component={Profile} />
          </Switch>
        </Router>
      </section>
    );
  }
}

App.propTypes = {
  userId: number.isRequired,
  token: string.isRequired,
};

export default inject(
  ({store}) => {
    return {
      userId: store.userId,
      token: store.token
    };
  }
)(
  observer(App)
);
