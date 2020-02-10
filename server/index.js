const path = require('path');
const express = require('express');
const app = express();

const API = require('./api/api');

const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use('/api', API);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
