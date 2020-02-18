import React, { useState, useEffect } from 'react';
import '../index.scss';

import GeneralInfo from './GeneralInfo';
import Description from './Description';
import Instructions from './Instructions';

// graphql endpoint query (getRecipe)
import getRecipe from '../queries/getRecipe';

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
    // will change from localhost later
    fetch(`http://localhost:3000/api/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query: getRecipe,
        variables: { title: props.title, author: props.author }
      })
    })
      .then(response => response.json())
      .then(({ data }) => {
        const { generalInfo, details, instructions } = data.getRecipe;
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
