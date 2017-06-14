import React from 'react';

import {Link} from 'react-router-dom';

const OnboardingStem = () => {
  return (
    <div>
      <h1>1. Stemmen</h1>
      <p>Like en dislike kunstwerken naar hartelust en vindt jouw match.</p>
      <Link to='/Onboarding2'>Volgende</Link>
    </div>
  );
};
export default OnboardingStem;
