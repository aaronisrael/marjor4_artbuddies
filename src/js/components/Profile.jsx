import React from 'react';

import TopBar from './TopBar';


const Profile = () => {
  return (
    <div className='feed'>
      <TopBar />
      <div className='profile'>
        <img className='match-img' src='../../assets/img/matches/1.png' alt='' />
        <h1 className='user-name'>Xander Bruggeling</h1>
        <h2 className='user-about'>Over mij</h2>
        <textarea className='textarea' placeholder='Vertel wat over jezelf in 300 karakters.' name='' id='' cols='30' rows='10'></textarea>
        <button className='submit'>Profiel opslaan</button>
      </div>
    </div>
  );
};
export default Profile;
