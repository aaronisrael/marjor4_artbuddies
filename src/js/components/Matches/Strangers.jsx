import React from 'react';

import MatchNav from './index';

const Strangers = () => {
  return (
    <div>
      <MatchNav />
      <ul className='list center'>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/1.png' alt='' />
          <div className='name-container'>
            <p className='match-name'>Xander Bruggeling</p>
            <p className='match-count'>(7 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/2.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Mieke Rommens</p>
            <p className='match-count'>(5 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/5.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Leonard Rupert</p>
            <p className='match-count'>(5 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/3.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Bart Verschepen</p>
            <p className='match-count'>(4 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/4.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Demian Broens</p>
            <p className='match-count'>(4 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/6.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Matthijs Roelof</p>
            <p className='match-count'>(3 matchende likes)</p>
          </div>
        </li>
        <li className='match'>
          <img className='match-img' src='../../../../assets/img/matches/7.jpg' alt='' />
          <div className='name-container'>
            <p className='match-name'>Caroline Spijker</p>
            <p className='match-count'>(3 matchende likes)</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Strangers;
