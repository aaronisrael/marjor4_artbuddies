import React from 'react';

// import {observer, inject, PropTypes} from 'mobx-react';

import DataList from '../../assets/data/artList.json';

import TopBar from './TopBar';
import Card from './ArtCard/';

const ListView = () => {

  return (
    <div className='feed'>
      <TopBar />
      <p className='intro'>
        Ga meteen aan de slag door onderstaande 10 kunstwerken te liken of te disliken. Op basis van jouw likes en / of dislikes vinden we dan een geschikte match voor jou!
      </p>
      <ul className='list'>
        {
          DataList.data.map(
            d => (
              <Card
                {...d}
                key={d.id}
                idkey={d.id}
                name={d.name}
                img={d.photo}
              />
            )
          )
        }
      </ul>
      <section className='footer'>
      <p className='outro'>
        Dit waren je kunstwerken voor de maand juni 2017!
        Vanaf <span className='red'>1 juli</span> zijn er weer <span className='red'>10 nieuwe kunstwerken </span>
         beschikbaar voor je.
      </p>
      <div className='logo'></div>
      </section>
    </div>
  );

};

// export default inject(`store`)(
//   observer(ListView)
// );
export default ListView;
