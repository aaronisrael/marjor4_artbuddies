import React from 'react';

import MatchNav from './index';

const Friends = () => {
  return (
    <div>
      <MatchNav />
      <ul className='list-center'>
        <a className='match' href='#popup1'>
          <img className='match-img' src='../../../../assets/img/matches/1.png' alt='' />
          <div className='name-container'>
            <p className='match-name'>Xander Bruggeling</p>
            <p className='match-count'>(5 matchende likes)</p>
          </div>
        </a>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/2.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Mieke Rommens</p>
            <p className='match-count'>(4 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/3.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Bart Verschepen</p>
            <p className='match-count'>(3 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/4.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Demian Broens</p>
            <p className='match-count'>(3 matchende likes)</p>
          </div>
        </li>
      </ul>
      <div id='popup1' className='overlay'>
        <div className='popup'>
          <a className='close' href='#'><div className='closebutton'></div></a>
          <img className='popup-img' src='../../../../assets/img/matches/1.png' alt='' />

          <div className='pop-wrap'>
            <h2 className='popup-name'>Xander Bruggeling</h2>
            <p className='match-age'>25 jaar</p>
          </div>

          <div className='pop-info'>
            <h3>Over mij</h3>
            <p className='popup-description'>Hey, ik ben Xander! Ik ben vooral
geïnteresseerd in moderne kunst, meer specifiek in beeldhouwkunst. </p>
            <h3>Matching</h3>
            <p className='popup-description'>Jullie hebben 5 matchende likes.</p>
          </div>

         </div>
       </div>
    </div>
  );
};
export default Friends;
