import React from 'react';
import DevTools from 'mobx-react-devtools';

import {observer, inject, PropTypes} from 'mobx-react';

import {withRouter} from 'react-router';

import FacebookLogin from '../lib/facebookLogin';


const FacebookConnect = ({store, history}) => {

  const {
    add
  } = store;

  const responseFacebook = response => {
    add(response.userID, response.accessToken);
    history.push(`/ListView`);
  };

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <section>
        <FacebookLogin
            autoLoad
            appId='711579455681352'
            callback={responseFacebook}
        />
      </section>
    </section>
  );
};

FacebookConnect.propTypes = {
  store: PropTypes.observableObject.isRequired,
  history: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default inject(`store`)(
  withRouter(observer(FacebookConnect))
);
