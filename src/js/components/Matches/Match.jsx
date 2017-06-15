import React from 'react';

import {string} from 'prop-types';

const Match = ({name, photo}) => {
  return (
    <a className='match' href='#popup1'>
      <img className='match-img' src={photo} alt='' />
      <div className='name-container'>
        <p className='match-name'>{name}</p>
        <p className='match-count'>(5 matchende likes)</p>
      </div>
    </a>
  );
};

Match.propTypes = {
  name: string.isRequired,
  photo: string.isRequired,
};
export default Match;
