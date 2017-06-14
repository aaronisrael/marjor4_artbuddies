import React from 'react';
const Detail = () => {

  return (
    <div>
      <img src={`../../../assets/img/art/1829-C/100.jpg`} alt='test' />
      <h1>De baden in Oostende</h1>
      <h2>James Ensor - 1890</h2>
      <p>Op deze ingekleurde ets geeft Ensor zijn impressie van het baden aan het strand in Oostende. Links staat een groot aantal badkoetsen, die men kon huren en waarin men zich kon omkleden. Nadat een koetsier het paard voor de koets had gespannen, reed hij de wagen het water in en wanneer men daar goed en wel was aangekomen en de trap was uitgezet, sloeg de koetsier met zijn zweep op het dak, ten teken dat de gasten het voertuig konden verlaten.</p>
      <button>Like</button>
      <button>Dislike</button>
      <ul>
        <li>
          <button>vorig kunstwerk</button>
        </li>
        <li>
          <button>volgend kunstwerk</button>
        </li>
      </ul>
    </div>
  );
};
export default Detail;
