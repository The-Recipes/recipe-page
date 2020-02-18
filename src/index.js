import React from 'react';
import ReactDOM from 'react-dom';

import Recipe from './components/Recipe';

// for testing
const testTitle = 'Lorem Ipsum Dolor Sit Amet Recipe';
const testAuthor = 'AUTHOR IPSUM';

ReactDOM.render(
  <Recipe title={testTitle} author={testAuthor} />,
  document.getElementById('app')
);
