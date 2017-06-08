/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import {string} from 'prop-types';

import {observer} from 'mobx-react';


const ArtCard = ({name, photo}) => {

  return (

    <div>
      <li className='tweet'>
        {name}
        <img src={`../../../assets/img/art/${photo}/100.jpg`} alt='test' />
        <button type='button'>Like</button>
        <button type='button'>Dislike</button>
      </li>
    </div>
  );

};

ArtCard.propTypes = {
  name: string.isRequired,
  photo: string.isRequired
};

export default observer(ArtCard);
