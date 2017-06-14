import React from 'react';

import TopBar from './TopBar';


const Profile = () => {
  return (
    <div>
      <TopBar />
      <img src='../../assets/img/matches/1.png' alt='' />
      <h1>Xander Bruggeling</h1>
      <h2>Over mij</h2>
      <textarea name='' id='' cols='30' rows='10'></textarea>
      <button>Profiel opslaan</button>
    </div>
  );
};
export default Profile;
