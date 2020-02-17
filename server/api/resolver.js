// database model for recipe -- used for connecting to db
const Recipe = require('../database/models/recipe');

// fake db for testing
const testData = require('../database/seedData/test__data');

// returns the Recipe GraphQL type
// (parent type of GeneralInfo, Details, Instructions)
function findRecipe(id, { generalInfo, details, instructions }) {
  // call find on recipe model here
  // may need to think of a way to query for the right recipe
  return { id, generalInfo, details, instructions };
}

// main GraphQL resolver
const root = {
  getRecipe: ({ id }) => findRecipe(id, testData)
};

module.exports = root;
