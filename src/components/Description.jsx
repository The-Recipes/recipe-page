import React from 'react';

const Description = ({ photo, photoAlt, description }) => (
  <div id="recipe-desc">
    <img className="recipe-desc-photo" src={photo} alt={photoAlt} />
    <p>{description}</p>
  </div>
);

export default Description;
