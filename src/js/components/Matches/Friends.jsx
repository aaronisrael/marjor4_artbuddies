import React from 'react';

import MatchNav from './index';
import Match from './Match';

import {observer, inject, PropTypes} from 'mobx-react';


const Friends = ({store}) => {

  const {
    matches
  } = store;

  console.log(matches);

  return (
    <div>
      <MatchNav />
      <ul className='list center'>
        {
          matches.map(
            d => (
              <Match
                key={d.id}
                photo={d.photo}
                name={d.name}
              />
            )
          )
        }
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

Friends.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Friends)
);
