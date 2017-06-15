import React from 'react';
import TopBar from '../TopBar';
const Detail = () => {

  return (
    <div className='detail'>
      <TopBar />
      <img className='detail-img' src={`../../../assets/img/art/1829-C/100.jpg`} alt='test' />
      <div className='detail-wrap'>
      <h1 className='detail-title'>De baden in Oostende</h1>
        <div className='detail-buttons'>
          <button className='button heart'></button>
          <button className='button kruis'></button>
        </div>
      </div>
      <div className='detail-text'>
        <h2 className='detail-artist'>James Ensor - 1890</h2>
        <p className='detail-description'>Op deze ingekleurde ets geeft Ensor zijn impressie van het baden aan het strand in Oostende. Links staat een groot aantal badkoetsen, die men kon huren en waarin men zich kon omkleden. Nadat een koetsier het paard voor de koets had gespannen, reed hij de wagen het water in en wanneer men daar goed en wel was aangekomen en de trap was uitgezet, sloeg de koetsier met zijn zweep op het dak, ten teken dat de gasten het voertuig konden verlaten.</p>
      </div>

      <ul className='detail-nav'>
        <li className='detail-buttons'>
          <div className='vorige'></div>
          <a className='detail-next'>vorig <br />kunstwerk</a>
        </li>
        <li className='detail-buttons'>
          <a className='detail-next'>volgend <br />kunstwerk</a>
          <div className='pijl'></div>
        </li>
      </ul>
    </div>
  );
};
export default Detail;
