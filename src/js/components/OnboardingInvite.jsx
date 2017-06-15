import React from 'react';

import {Link} from 'react-router-dom';

const OnboardingInvite = () => {
  return (
    <section className='onboarding'>
      <div className='ellipse2'><div className='enveloppe'></div></div>
      <div className='onboarding-wrap'>
        <h1 className='step-title'>3. Invite</h1>
        <p className='step-text'>Nodig je matches uit om samen naar het museum te gaan, samen voor de prijs van één.</p>
      <div className='next'><Link to='/ListView'>Volgende</Link><div className='pijl'></div></div>
    </div>
  </section>
  );
};
export default OnboardingInvite;
