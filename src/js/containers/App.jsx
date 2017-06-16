import React, {Component} from 'react';

import {observer} from 'mobx-react';

import {withRouter} from 'react-router';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ListView from '../components/ListView';
import FacebookConnect from './FacebookConnect';
import Friends from '../components/Matches/Friends';
import Strangers from '../components/Matches/Strangers';
import Profile from '../components/Profile';
import ListDetail from '../components/ArtCard/Detail';
import OnboardingStem from '../components/OnboardingStem';
import OnboardingMatch from '../components/OnboardingMatch';
import OnboardingInvite from '../components/OnboardingInvite';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render(history) {
    return (
      <section>

        <Router history={history}>
          <Switch>
            <Route exact path='/' component={FacebookConnect} />
            <Route exact path='/Onboarding1' component={OnboardingStem} />
            <Route exact path='/Onboarding2' component={OnboardingMatch} />
            <Route exact path='/Onboarding3' component={OnboardingInvite} />
            <Route exact path='/ListView' component={ListView} />
            <Route exact path='/ListView/art0' component={ListDetail} />
            <Route path='/Matches/Friends' component={Friends} />
            <Route path='/Matches/Strangers' component={Strangers} />
            <Route exact path='/Profile' component={Profile} />
          </Switch>
        </Router>
      </section>
    );
  }
}

export default withRouter(observer(App));
