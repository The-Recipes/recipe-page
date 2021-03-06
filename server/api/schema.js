const { buildSchema } = require('graphql');

// GraphQL Schema
const schema = buildSchema(`
  type GeneralInfo {
    title: String
    author: String
    rated: Int
    categories: [String]
    summary: String
  }

  type Details {
    photo: String
    photoAlt: String
    description: String
  }

  type Instructions {
    totalYield: String
    activeTime: String
    totalTime: String
    ingredients: [String]
    directions: [String]
  }

  type Recipe {
    generalInfo: GeneralInfo
    details: Details
    instructions: Instructions
  }

  type Query {
    getRecipe(title: String author: String): Recipe
  }
`);

module.exports = schema;
