/* eslint-disable react/jsx-filename-extension */

import React from 'react';

import {string, number, shape, func} from 'prop-types';

import {observer, inject, PropTypes} from 'mobx-react';

import {withRouter} from 'react-router';


const ArtCard = ({name, photo, idkey, store, history}) => {

  const {
    update
  } = store;

  const handleLike = () => {
    update(true, idkey);
  };

  const handleDislike = () => {
    update(false, idkey);
  };

  const handleDetail = () => {
    console.log(`click`);
    history.push(`/ListView/art0`);
  };

  return (

    <div>
      <li className='tweet'>
        {name}
        <img src={`../../../assets/img/art/${photo}/100.jpg`} onClick={handleDetail} alt='test' />
        <button type='button' onClick={handleLike}>Like</button>
        <button type='button' onClick={handleDislike}>Dislike</button>
      </li>
    </div>
  );
};

ArtCard.propTypes = {
  name: string.isRequired,
  photo: string.isRequired,
  idkey: number.isRequired,
  store: PropTypes.observableObject.isRequired,
  history: shape({
    push: func.isRequired,
  }).isRequired,
};


export default inject(`store`)(
  withRouter(observer(ArtCard))
);
