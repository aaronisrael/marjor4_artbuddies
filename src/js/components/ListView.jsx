import React from 'react';

import DataList from '../../assets/data/artList.json';


import Card from './ArtCard/';

const ListView = () => {

  console.log(DataList.data);

  return (
    <ul>
      {
        DataList.data.map(
          d => (
            <Card
              {...d}
              key={d.id}
              name={d.name}
              img={d.photo}
            />
          )
        )
      }
    </ul>
  );

};

export default ListView;
