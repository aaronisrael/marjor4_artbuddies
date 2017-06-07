import React from 'react';
import {string} from 'prop-types';

import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import {Route} from 'react-router-dom';

import FacebookLogin from '../lib/facebookLogin';

const App = ({name}) => {

  const responseFacebook = response => {
    console.log(response);
  };

  return (
    <section>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <header>
        <h1>Hello, {name}</h1>
      </header>

      <section>
        <Route
          exact path='/'
        />
        <FacebookLogin
            appId='711579455681352'
            callback={responseFacebook}
          />
      </section>

    </section>
  );
};

App.propTypes = {
  name: string.isRequired
};

export default inject(
  ({store}) => ({
    name: store.name
  })
)(
  observer(App)
);
