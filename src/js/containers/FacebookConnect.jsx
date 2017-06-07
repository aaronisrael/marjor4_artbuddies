//import React from 'react';
import React, {Component} from 'react';
import DevTools from 'mobx-react-devtools';

import {observer, inject} from 'mobx-react';
import {number, string} from 'prop-types';

import {Redirect} from 'react-router-dom';

import FacebookLogin from '../lib/facebookLogin';


class FacebookConnect extends Component {
  constructor(props, context, userId, token, router) {
    super(props, context, userId, token, router);
    this.state = {
      userId, token
    };
  }

  responseFacebook(response, userId, token) {
    userId = response.userID;
    token = response.accessToken;
    console.log(userId);
    console.log(token);
  }

  render() {
    return (
      <section>

        {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

        <section>
          <FacebookLogin
              autoLoad
              appId='711579455681352'
              callback={this.responseFacebook}
            />
          <Redirect to='/ListView' />
        </section>
      </section>
    );
  }
}

FacebookConnect.propTypes = {
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
  observer(FacebookConnect)
);
