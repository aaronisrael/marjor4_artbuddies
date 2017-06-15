import React from 'react';

import {Link} from 'react-router-dom';

const OnboardingStem = () => {
  return (
    <section className='onboarding'>
    <div className='onboarding-header'></div>
    <div className='onboard-wrap'>
      <h1 className='step-title'>1. Stemmen</h1>
      <p className='step-text'>Like en dislike kunstwerken naar hartelust en vindt jouw match.</p>
      <div className='next'><Link to='/Onboarding2'>Volgende</Link><div className='pijl'></div></div>
    </div>
    </section>
  );
};
export default OnboardingStem;
