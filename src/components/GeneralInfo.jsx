import React from 'react';
import Categories from './Categories';

const GeneralInfo = ({ title, author, rated, summary, categories }) => (
  <div id="recipe-general-info">
    <h1>{title}</h1>
    <div id="recipe-author-rating">
      <span className="author-name">{author}</span>
      <span className="recipe-rating">RATED: {rated}/5</span>
    </div>
    <Categories categories={categories} />
    <p>{summary}</p>
  </div>
);

export default GeneralInfo;
