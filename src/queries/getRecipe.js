const getRecipe = `query($recipeId: ID!) {
  getRecipe(id: $recipeId) {
    generalInfo {
      title
      author
      rated
      categories
      summary
    }
    details {
      photo
      photoAlt
      description
    }
    instructions {
      totalYield
      activeTime
      totalTime
      ingredients
      directions
    }
  }
}`;

export default getRecipe;