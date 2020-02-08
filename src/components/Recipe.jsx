import React, { useState, useEffect } from 'react';

import GeneralInfo from './GeneralInfo';
import Description from './Description';
import Instructions from './Instructions';

const Recipe = props => {
  // local state: recipe ; maybe consider useReducer later...
  const [recipe, setRecipe] = useState({
    generalInfo: {
      title: '',
      author: '',
      rated: 0,
      categories: [],
      summary: ''
    },
    details: {
      photo: '',
      photoAlt: '',
      description: ''
    },
    instructions: {
      totalYield: '',
      activeTime: '',
      totalTime: '',
      ingredients: [],
      directions: []
    }
  });

  // side effect: fetch recipe information
  useEffect(() => {
    fetch(`http://localhost:3000/api/recipes/${props.recipeId}`)
      .then(response => response.json())
      .then(({ generalInfo, details, instructions }) => {
        setRecipe({ generalInfo, details, instructions });
      });
  }, [props.recipeId]);

  return (
    <React.Fragment>
      <GeneralInfo {...recipe.generalInfo} />
      <Description {...recipe.details} />
      <hr />
      <Instructions {...recipe.instructions} />
    </React.Fragment>
  );
};

export default Recipe;
