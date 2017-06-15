/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import TopBar from '../TopBar';

import {Link} from 'react-router-dom';

import {observer, inject, PropTypes} from 'mobx-react';



const Matches = ({store}) => {

  const {
    findMatch
  } = store;

  findMatch();

  return (
    <div className='feed'>
      <TopBar />
      <div className='toggle-friends'>
        <li className='friend-button active'><Link to='/Matches/Friends'>Friends</Link></li>
        <li className='friend-button'><Link to='/Matches/Strangers'>Strangers</Link></li>
      </div>
    </div>
  );
};

Matches.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Matches)
);
