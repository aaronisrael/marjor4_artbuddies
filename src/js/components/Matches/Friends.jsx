import React from 'react';

import MatchNav from './index';

const Friends = () => {
  return (
    <div>
      <MatchNav />
      <ul>
        <li>
          <img src='../../../../assets/img/matches/1.png' alt='' />
          <p>Xander Bruggeling</p>
          <p>(5 matchende likes)</p>
        </li>
        <li>
          <img src='../../../../assets/img/matches/2.jpg' alt='' />
          <p>Mieke Rommens</p>
          <p>(4 matchende likes)</p>
        </li>
        <li>
          <img src='../../../../assets/img/matches/3.jpg' alt='' />
          <p>Bart Verschepen</p>
          <p>(3 matchende likes)</p>
        </li>
        <li>
          <img src='../../../../assets/img/matches/4.jpg' alt='' />
          <p>Demian Broens</p>
          <p>(3 matchende likes)</p>
        </li>
      </ul>
    </div>
  );
};
export default Friends;
