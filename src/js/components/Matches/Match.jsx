import React from 'react';

import {string, number} from 'prop-types';

const Match = ({name, photo, idkey}) => {
  return (
    <div>
      <a className='match' href={`#popup${idkey}`}>
        <img className='match-img' src={photo} alt='' />
        <div className='name-container'>
          <p className='match-name'>{name}</p>
          <p className='match-count'>(5 matchende likes)</p>
        </div>
      </a>
      <div id={`popup${idkey}`} className='overlay'>
        <div className='popup'>
          <a className='close' href='#'><div className='closebutton'></div></a>
          <img className='popup-img' src={photo} alt='' />

          <div className='pop-wrap'>
            <h2 className='popup-name'>{name}</h2>
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

Match.propTypes = {
  name: string.isRequired,
  photo: string.isRequired,
  idkey: number.isRequired
};
export default Match;
