const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// fake db for testing
const testData = require('./test__data');

// Implements the GeneralInfo GraphQL type
function GeneralInfo(id) {}

// Implements the Details GraphQL type
function Details(id) {}

// Implements the Instructions GraphQL type
function Instructions(id) {}

// Implements the Recipe GraphQL type
// (parent of GeneralInfo, Details, Instructions)
function Recipe(id) {}

const schema = buildSchema(``);

const root = {};

const router = express.Router();

//ping api to test connection
router.get('/', (req, res) => {
  res.send('ping!');
});

//get recipe data
router.get('/recipes/:recipeId', (req, res) => {
  res.send(testData);
});

module.exports = router;
