const express = require('express');
const graphqlHTTP = require('express-graphql');

// GraphQL schema and resolver
const schema = require('./schema');
const root = require('./resolver');

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
