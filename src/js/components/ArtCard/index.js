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

  const getPosition = () => {
    if (idkey % 2) {
      return `flex-start`;
    } else {
      return `flex-end`;
    }
  };

  const getOrder = () => {
    if (idkey % 2) {
      console.log(`yo`);
      return `1`;
    } else {
      return `2`;
    }
  };

  const getOrder2 = () => {
    if (idkey % 2) {
      console.log(`yo`);
      return `2`;
    } else {
      return `1`;
    }
  };

  const divStyle = {
    display: `flex`,
    justifyContent: `${getPosition()}`
  };

  const workStyle = {
    order: `${getOrder()}`
  };

  const buttonStyle = {
    order: `${getOrder2()}`
  };

  return (
    <div style={divStyle}>
      <li className='card' >

        <div className='title-container'>

          <h2 className='work-name' style={workStyle}>{name}</h2>

          <div className='buttons' style={buttonStyle}>
            <button className='button' type='button' onClick={handleLike}><div className='heart'></div></button>
            <button className='button' type='button' onClick={handleDislike}><div className='kruis'></div></button>
          </div>

        </div>
        <img className='work-img' src={`../../../assets/img/art/${photo}/100.jpg`} onClick={handleDetail} alt='test' />
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
