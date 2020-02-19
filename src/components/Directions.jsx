import React from 'react';

const Directions = ({ directions }) => (
  <div id="recipe-directions">
    <h3>Directions</h3>
    <ol>
      {directions.map((direction, index) => (
        <li key={index + '.' + direction.slice(0, 10)}>
          <p>{index + 1 + '.'}</p>
          <p>{direction}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default Directions;
