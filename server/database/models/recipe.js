const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
  generalInfo: {
    title: String,
    author: String,
    rated: Number,
    categories: [String],
    summary: String,
  },
  details: {
    photo: String,
    photoAlt: String,
    description: String,
  },
  instructions: {
    totalYield: String,
    activeTime: String,
    totalTime: String,
    ingredients: [String],
    directions: [String],
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;