const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const API = require('./api/api');

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/api', API);


// establish connection to db then listen in on PORT
mongoose.connect('mongodb://localhost:27017/recipeBook', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
  })
  .catch(() => {
    console.log('Unable to connect to DB.');
  });

