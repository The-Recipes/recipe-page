const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// database model for recipe -- used for connecting to db
const Recipe = require('../database/models/recipe');

// fake db for testing
const testData = require('../test__data');

// Implements the Recipe GraphQL type
// (parent type of GeneralInfo, Details, Instructions)
function findRecipe(id, { generalInfo, details, instructions }) {
  this.id = id;
  this.generalInfo = generalInfo;
  this.details = details;
  this.instructions = instructions;
}

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

// main GraphQL resolver
const root = {
  getRecipe: ({ id }) => new findRecipe(id, testData),
};

const router = express.Router();

// use GraphQL endpoint
router.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

//ping api to test connection
router.get('/', (req, res) => {
  res.send('ping!');
});

module.exports = router;
