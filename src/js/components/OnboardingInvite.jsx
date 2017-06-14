import React from 'react';

import {Link} from 'react-router-dom';

const OnboardingInvite = () => {
  return (
    <div>
      <h1>3. Invite</h1>
      <p>Nodig je matches uit om samen naar het museum te gaan, samen voor de prijs van één.</p>
      <Link to='/ListView'>Volgende</Link>
    </div>
  );
};
export default OnboardingInvite;
