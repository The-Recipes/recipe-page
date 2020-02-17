const Recipe = require('../models/recipe.js');
const testData = require('./test__data.js');

const seedData = async () => {
  const recipe = new Recipe(testData);
  await recipe.save();
};

module.exports = seedData;
