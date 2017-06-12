import React from 'react';

import TopBar from './TopBar';

import {observer, inject, PropTypes} from 'mobx-react';


const Matches = ({store}) => {

  const {
    findMatch
  } = store;

  findMatch();

  return (
    <div>
      <TopBar />
      <p>hallo matches</p>
    </div>
  );
};

Matches.propTypes = {
  store: PropTypes.observableObject.isRequired,
};

export default inject(`store`)(
  observer(Matches)
);
