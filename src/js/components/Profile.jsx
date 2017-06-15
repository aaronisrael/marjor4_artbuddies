import React from 'react';

import TopBar from './TopBar';


const Profile = () => {
  return (
    <div>
      <TopBar />
      <div className='profile'>
        <img className='match-img' src='../../assets/img/matches/1.png' alt='' />
        <h1 className='user-name'>Xander Bruggeling</h1>
        <h2 className='user-about'>Over mij</h2>
        <textarea name='' id='' cols='30' rows='10'></textarea>
        <button>Profiel opslaan</button>
      </div>
    </div>
  );
};
export default Profile;
