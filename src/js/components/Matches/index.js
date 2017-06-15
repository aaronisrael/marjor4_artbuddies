/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import TopBar from '../TopBar';

import {NavLink} from 'react-router-dom';

import {observer, inject, PropTypes} from 'mobx-react';

import {Rellax} from 'rellax';

const Matches = ({store}) => {

  console.log(Rellax);

  const {
    findMatch
  } = store;

  findMatch();

  return (
    <div className='feed'>
      <TopBar />
      <div className='toggle-friends'>
        <li className='friend-button'><NavLink to='/Matches/Friends'>Friends</NavLink></li>
        <li className='friend-button'><NavLink to='/Matches/Strangers'>Strangers</NavLink></li>
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
