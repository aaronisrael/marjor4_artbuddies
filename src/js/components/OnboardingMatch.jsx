import React from 'react';

import {Link} from 'react-router-dom';

const OnboardingMatch = () => {
  return (
    <section className='onboarding'>
      <div className='connect'></div>
      <div className='onboard-wrap'>
        <h1 className='step-title'>2. Matchen</h1>
        <p className='step-text'>Vind mensen die ook (on)geïnteresseerd zijn in dezelfde kunstwerken.</p>
        <div className='next'><Link to='/Onboarding3'>Volgende</Link><div className='pijl'></div></div>
      </div>
    </section>
  );
};
export default OnboardingMatch;
