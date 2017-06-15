import React from 'react';
import DevTools from 'mobx-react-devtools';

import {observer, inject, PropTypes} from 'mobx-react';

import {shape, func} from 'prop-types';

import {withRouter} from 'react-router';

import FacebookLogin from '../lib/facebookLogin';


const FacebookConnect = ({store, history}) => {

  const {
    login
  } = store;

  const responseFacebook = response => {
    login(response.userID, response.accessToken);
    history.push(`/Onboarding1`);
  };

  return (
    <section className='onboarding'>

      {process.env.NODE_ENV !== `production` ? <DevTools /> : null}

      <section className='onboard-wrap'>
        <div className='logogroot'></div>
        <div className='ellipse1'></div>
        <h1 className='onboard-title'>Vind <br /> jouw <br /> echte <br /> Artbuddy</h1>
        <p className='onboard-text'>Met de hulp van dit platform willen we jou de kans geven om jouw échte Artbuddy te vinden.</p> <br />
        <p className='onboard-text'>Deze Artbuddy is net als jou geïnteresseerd in kunst en zoekt ook een buddy om mee naar het MSK te gaan. Log in en vind de jouwe!</p>
        <FacebookLogin
            appId='711579455681352'
            callback={responseFacebook}
        />
      </section>
    </section>
  );
};

FacebookConnect.propTypes = {
  store: PropTypes.observableObject.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

export default inject(`store`)(
  withRouter(observer(FacebookConnect))
);
