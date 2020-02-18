const getRecipe = `query($title: String $author: String) {
  getRecipe(title: $title author: $author) {
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
