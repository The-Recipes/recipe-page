// database model for recipe -- used for connecting to db
const Recipe = require('../database/models/recipe');

// returns the Recipe GraphQL type
// (parent type of GeneralInfo, Details, Instructions)
function findRecipe(title, author) {
  // may need to alter recipe query later
  return Recipe.findOne({
    'generalInfo.title': title,
    'generalInfo.author': author
  })
    .exec()
    .then(recipe => recipe);
}

// main GraphQL resolver
const root = {
  getRecipe: ({ title, author }) => findRecipe(title, author)
};

module.exports = root;
