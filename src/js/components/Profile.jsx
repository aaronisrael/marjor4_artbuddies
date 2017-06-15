import React from 'react';

import {observer, inject, PropTypes} from 'mobx-react';


import TopBar from './TopBar';


const Profile = ({store}) => {

  const {
    myUser, myName, myPhoto
  } = store;

  myUser();

  return (
    <div className='feed'>
      <TopBar />
      <div className='profile'>
        <img className='match-img' src={myPhoto} alt='' />
        <h1 className='user-name'>{myName}</h1>
        <h2 className='user-about'>Over mij</h2>
        <textarea className='textarea' placeholder='Vertel wat over jezelf in 300 karakters.' name='' id='' cols='30' rows='10'></textarea>
        <button className='submit'>Profiel opslaan</button>
      </div>
    </div>
  );
};

Profile.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Profile)
);
