import React from 'react';

import GeneralInfo from './GeneralInfo';
import Description from './Description';
import Instructions from './Instructions';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };

    this.fetchRecipe = this.fetchRecipe.bind(this);
  }

  componentDidMount() {
    this.fetchRecipe(2);
  }

  fetchRecipe(recipeId) {
    fetch(`http://localhost:3000/api/recipes/${recipeId}`)
      .then(response => response.json())
      .then(({ generalInfo, details, instructions }) => {
        this.setState({ generalInfo, details, instructions });
      });
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
