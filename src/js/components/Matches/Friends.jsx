import React from 'react';

import MatchNav from './index';
import Match from './Match';

import {observer, inject, PropTypes} from 'mobx-react';


const Friends = ({store}) => {

  const {
    matches
  } = store;

  return (
    <div>
      <MatchNav />
      <ul className='list center'>
        {
          matches.map(
            d => (
              <Match
                key={d.userId}
                photo={d.photo}
                name={d.name}
                idkey={d.userId}
              />
            )
          )
        }
      </ul>
    </div>
  );
};

Friends.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Friends)
);
