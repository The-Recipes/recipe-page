const { dbConnect } = require('../index.js');
const seedData = require('./seed.js');

dbConnect().then(() => {
  console.log('connected to DB.');
  seedData();
  console.log('...Seed recipe complete.');
});
