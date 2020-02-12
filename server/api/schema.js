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
    id: ID!
    generalInfo: GeneralInfo
    details: Details
    instructions: Instructions
  }

  type Query {
    getRecipe(id: ID!): Recipe
  }
`);

module.exports = schema;