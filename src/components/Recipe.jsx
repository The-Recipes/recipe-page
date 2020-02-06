import React from 'react';

import GeneralInfo from './GeneralInfo';
import Description from './Description';
import Instructions from './Instructions';

// fake data; will remove later
import testData from '../test__data';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = testData;
  }

  render() {
    const { generalInfo, details, instructions } = this.state;

    return (
      <React.Fragment>
        <GeneralInfo {...generalInfo} />
        <Description {...details} />
        <hr />
        <Instructions {...instructions} />
      </React.Fragment>
    );
  }
}

export default Recipe;
