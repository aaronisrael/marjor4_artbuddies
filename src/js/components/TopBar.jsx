import React from 'react';

import {Link} from 'react-router-dom';

const TopBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/ListView'>Feed</Link></li>
        <li><Link to='/Matches'>Matcher</Link></li>
        <li><Link to='/Profile'>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default TopBar;
