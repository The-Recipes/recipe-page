import React from 'react';

import GeneralInfo from './GeneralInfo';
import Description from './Description';
import Instructions from './Instructions';

const Recipe = () => {
  return (
    <React.Fragment>
      <GeneralInfo />
      <Description />
      <hr />
      <Instructions />
    </React.Fragment>
  );
};

export default Recipe;
