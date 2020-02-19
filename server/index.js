require('dotenv').config();
const path = require('path');
const express = require('express');

// connect to mongoDB
const { dbConnect } = require('./database/index');

// GraphQL API router
const API = require('./api/index');

const app = express();
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/api', API);

// establish connection to db then listen in on PORT
dbConnect()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Recipe App listening on port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.error('Unable to connect to DB.');
  });
