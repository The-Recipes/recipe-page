import React from 'react';

import Ingredients from './Ingredients';
import Directions from './Directions';

const Instructions = ({
  totalYield,
  activeTime,
  totalTime,
  ingredients,
  directions
}) => (
  <div id="recipe-instructions">
    <ul id="recipe-about">
      <li>
        <span>YIELD:</span>
        <span>{totalYield}</span>
      </li>
      <li>
        <span>ACTIVE TIME:</span>
        <span>{activeTime}</span>
      </li>
      <li>
        <span>TOTAL TIME:</span>
        <span>{totalTime}</span>
      </li>
    </ul>
    <Ingredients ingredients={ingredients} />
    <Directions directions={directions} />
  </div>
);

export default Instructions;
