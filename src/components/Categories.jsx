import React from 'react';

const Categories = ({ categories }) => (
  <ul id="categories">
    {categories.map(category => (
      <li key={category} className="category">
        {category}
      </li>
    ))}
  </ul>
);

export default Categories;
