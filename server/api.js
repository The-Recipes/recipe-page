const express = require('express');
const router = express.Router();

const testData = require('./test__data');

//ping api to test connection
router.get('/', (req, res) => {
  res.send('ping!');
});

//get recipe data
router.get('/recipes/:recipeId', (req, res) => {
  res.send(testData);
});

module.exports = router;
