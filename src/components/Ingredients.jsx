import React from 'react';

const Ingredients = ({ ingredients }) => (
  <div id="recipe-ingredients">
    <h3>Ingredients</h3>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index + '.' + ingredient.slice(0, 10)}>{ingredient}</li>
      ))}
    </ul>
  </div>
);

export default Ingredients;
